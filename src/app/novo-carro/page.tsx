import { FormCars } from "./components/Form";

export default function NewCar(){
    return(
        <div className="flex flex-col justify-center items-center p-4">
            <h1 className="font-bold text-lg">novo carro</h1>
            <FormCars />
        </div>
    )
} 