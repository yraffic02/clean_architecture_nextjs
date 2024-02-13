import { GetCarUseCase } from "@/@core/application/car/get-car.use-case"
import { Registry, container } from "@/@core/infra/container/container-registry.api-local"
import { redirect } from "next/navigation"

async function getCar(id:string) {
    const useCaseGetCar = container.get<GetCarUseCase>(Registry.GetCarUseCase)
    const car = await useCaseGetCar.execute(id)

    return car
}

export default async function CarDetailPage({ params }: { params: { id: string } }){
    const car = await getCar(params.id)    
    console.log(car)


    return(
        <div className="p-6 flex flex-col gap-6">
            <h1>{car.carProps.brand}</h1>
            <h2>{car.carProps.model}</h2>
            <p>{car.carProps.year}</p>
        </div>
    )
}