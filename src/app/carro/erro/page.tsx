import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Ocorreu um erro: Carro não encontrado</h1>
      <Link href="/">INCIO</Link>
    </div>
  );
}
