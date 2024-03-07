import { DeleteCarUseCase } from "@/@core/application/car/delete-car.use-case";
import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case";
import { Car } from "@/@core/domain/entities/car";
import {
  Registry,
  container,
} from "@/@core/infra/container/container-registry.api-local";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarFormType, CarScheme } from "../schema/carSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { UpdateCarUseCase } from "@/@core/application/car/update-car.use-cas";

export const useCarList = () => {
  const [carList, setCarList] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter();
  const [modalDelete, setModalDelete] = useState<number | null>(null);
  const [modalEdit, setModalEdit] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(CarScheme),
  });

  const handleOpenCloseModalDelete = (index: number | null) => {
    setModalDelete(index);
  };

  const handleOpenCloseModalEdit = (index: number | null) => {
    setModalEdit(index);
  };

  const handleDeleteCar = async (id: string) => {
    try {
      const DeleteCarUseCase = container.get<DeleteCarUseCase>(
        Registry.DeleteCarUseCase,
      );
      const res = await DeleteCarUseCase.execute(id);

      if (res === 204) {
        handleDataCar();
        handleOpenCloseModalDelete(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataCar = async () => {
    setLoading(true);
    try {
      const useCaseCar = container.get<ListCarsUseCase>(
        Registry.ListCarUseCase,
      );
      const cars = await useCaseCar.execute();

      const carsString = JSON.stringify(cars);
      const carsObj = JSON.parse(carsString);

      setCarList(carsObj);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRouter = (path: string) => {
    push(path);
  };

  const resolveDataEdit = async (id: string, car: Car) => {
    try {
      const updateUseCase = container.get<UpdateCarUseCase>(
        Registry.UpdateCarUseCase,
      );
      const carData = await updateUseCase.execute(id, car);
      return carData;
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<CarFormType> = async (data) => {
    try {
      const dataObjUpdate = {
        brand: data.brand,
        model: data.model,
        year: data.year,
      };

      const res = await toast.promise(
        resolveDataEdit(data.id!, dataObjUpdate as Car),
        {
          pending: "Promise is pending",
          success: "Promise resolved ",
          error: "Promise rejected ",
        },
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        },
      );

      if (res) {
        handleDataCar();
        handleOpenCloseModalEdit(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleDataCar();
  }, []);

  return {
    carList,
    loading,
    push,
    handleDataCar,
    handleDeleteCar,
    handleOpenCloseModalDelete,
    modalDelete,
    modalEdit,
    handleOpenCloseModalEdit,
    handleRouter,
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
};
