import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarFormType, CarScheme } from "../schema/carSchema";
import { UpdateCarUseCase } from "@/@core/application/car/update-car.use-cas";
import { Registry, container } from "@/@core/infra/container/container-registry.api-local";
import { Car } from "@/@core/domain/entities/car";
import { toast } from "react-toastify";
import { useCarList } from "./useCarList";

export const UseFormCarEdit = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(CarScheme)
      })
    const {handleDataCar, handleOpenCloseModalEdit} = useCarList()

    const resolveDataEdit = async (id: string,car: Car) =>{
        const updateUseCase = container.get<UpdateCarUseCase>(Registry.UpdateCarUseCase);
        const carData = await updateUseCase.execute(id ,car)
        return carData
      }

      const onSubmit: SubmitHandler<CarFormType> = async (data) => {
        const dataObjUpdate = {
          brand: data.brand,
          model: data.model,
          year: data.year
        }
        const res =  await toast.promise(
            resolveDataEdit(data.id!, dataObjUpdate as Car),
            {
                pending: 'Promise is pending',
                success: 'Promise resolved ',
                error: 'Promise rejected '
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
            }
        ) 
  
        if(res){
            handleDataCar()
            handleOpenCloseModalEdit(null)
        } 
      }

    return{
        register,
        onSubmit,
        handleSubmit,
        errors,

    }
}