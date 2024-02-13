import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarFormType, CarScheme } from "../schema/carSchema";
import { toast } from "react-toastify";
import { Car } from "@/@core/domain/entities/car";
import { Registry, container } from "@/@core/infra/container/container-registry.api-local";
import { AddCarUseCase } from "@/@core/application/car/add-car.use-case";


export const UseHookFormCar = () =>{
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(CarScheme)
    })

    const resolveData = async (car: Car) =>{
        const AddCarUseCase = container.get<AddCarUseCase>(Registry.AddCarUseCase);
        const carData = await AddCarUseCase.execute(car)
        return carData
    }
 
    const onSubmit: SubmitHandler<CarFormType> = async (data) => {
        const res =  await toast.promise(
            resolveData(data as Car),
            {
                pending: 'Promise is pending',
                success: 'Promise resolved ',
                error: 'Promise rejected '
            },
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        )

        if(res){
            reset()
        }
    }

    return{
        onSubmit,
        handleSubmit,
        register,
        errors,
    }
}