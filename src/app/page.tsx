import { CarList } from "@/components/CarList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <h1>Carros Cadastrados no sistema</h1>
      <CarList />
      <button>Adicionar Carro</button>
    </main>
  );
}