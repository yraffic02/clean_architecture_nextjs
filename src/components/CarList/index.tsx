'use client'
import { Car } from "@/@core/domain/entities/car"
import { useRouter } from "next/navigation"

type CardListProps = {
  cars: Car[]
}

export const CarList = ({cars}: CardListProps) =>{
  const {push} = useRouter()
  
    return (
        <div className="border-red-700 border-2 w-2/5  h-96 flex flex-col items-start gap-2 rounded-md ">
          <div className="flex items-start gap-6 bg-slate-500 text-white w-full p-4">
            <div className="flex items-center justify-between w-2/4">
              <h2>Marca</h2>
              <h2>Modelo</h2>
              <h2>Ano</h2>
            </div>
          </div>
          <div className="overflow-auto w-full">
          <ul className="p-4">
            {
              cars.length <= 0 && <h1>Não há carros registrados!!</h1>
            }
            {
              cars.length > 0 && cars.map((item, index)=>{
                return (
                  <li 
                    key={index} 
                    onClick={()=> push(`/carro/${item.carProps.id}`)}
                  >
                    <div className="flex justify-between gap-6 w-full">
                      <div className="flex items-center justify-between  w-2/4">
                        <p>{item.carProps.brand}</p>
                        <p>{item.carProps.model}</p> 
                        <p>{item.carProps.year}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button>editar</button>
                        <button>apagar</button>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
}