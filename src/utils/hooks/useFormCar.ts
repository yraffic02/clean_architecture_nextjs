import { AddCarUseCase } from "@/@core/application/car/add-car.use-case";
import { Car } from "@/@core/domain/entities/car";
import {
  Registry,
  container,
} from "@/@core/infra/container/container-registry.api-local";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CarFormType, CarScheme } from "../schema/carSchema";

export const UseHookFormCar = () => {
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

  const resolveData = async (car: Car) => {
    try {
      const AddCarUseCase = container.get<AddCarUseCase>(
        Registry.AddCarUseCase,
      );
      const carData = await AddCarUseCase.execute(car);
      return carData;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<CarFormType> = async (data) => {
    try {
      const res = await toast.promise(
        resolveData(data as Car),
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
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
};
