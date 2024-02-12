import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case";
import { Registry, container } from "@/@core/infra/container/container-registry.api-local";
import { CarList } from "@/components/CarList";

export default async function Home (){
  const useCaseCar = container.get<ListCarsUseCase>(Registry.ListCarUseCase)
  const cars = await useCaseCar.execute()
  
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <h1>Carros Cadastrados no sistema</h1>
      <CarList  cars={cars}/> 
      <button>Adicionar Carro</button>
    </main>
  );
}