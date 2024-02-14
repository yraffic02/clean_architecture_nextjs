import { CarList } from "@/components/CarList";
import Link from "next/link";

export default async function Home (){
  return (
    <main className="flex flex-col items-center justify-center p-5 gap-4">
      <h1>Carros Cadastrados no sistema</h1>
      <CarList /> 
      <Link href='/novo-carro' prefetch={true} >Adicionar Carro</Link>
    </main>
  );
}