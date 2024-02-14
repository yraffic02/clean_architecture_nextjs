import { GetCarUseCase } from "@/@core/application/car/get-car.use-case"
import { Registry, container } from "@/@core/infra/container/container-registry.api-local"
import { redirect } from "next/navigation"

async function getCar(id:string) {
    try {
        const useCaseGetCar = container.get<GetCarUseCase>(Registry.GetCarUseCase)
        const car = await useCaseGetCar.execute(id)

        return car
    } catch (error) {
        console.error(error)
    }
}

export default async function CarDetailPage({ params }: { params: { id: string } }){
    const car = await getCar(params.id)

    if(!car){
        redirect('/carro/erro')
    }

    return(
        <div className="p-6 flex flex-col gap-6">
            <h1>{car?.carProps.brand}</h1>
            <h2>{car?.carProps.model}</h2>
            <p>{car?.carProps.year}</p>
        </div>
    )
}