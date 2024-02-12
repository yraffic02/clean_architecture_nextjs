import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarFormType, CarScheme } from "../schema/carSchema";

export const UseHookFormCar = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(CarScheme)
    })
    
    const onSubmit: SubmitHandler<CarFormType> = async (data) => {
            console.log(data)
    }

    return{
        onSubmit,
        handleSubmit,
        register,
        errors,
    }
}