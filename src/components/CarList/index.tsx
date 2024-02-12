import { Car } from "@/@core/domain/entities/car"

type CardListProps = {
  cars: Car[]
}

export const CarList = ({cars}: CardListProps) =>{
  
    return (
        <div className="flex flex-col items-start gap-2 border-red-700 border-2 rounded-md p-3 w-2/5  h-96">
        <div className="flex items-start gap-6 w-full">
          <h2>Marca</h2>
          <h2>Modelo</h2>
          <h2>Ano</h2>
        </div>
        <ul>
          {
            cars.length <= 0 && <h1>Não há carros registrados!!</h1>
          }
          {
            cars.length > 0 && cars.map((item, index)=>{
              return (
                <div className="flex items-start gap-6 w-full">
                  <li key={index} >{item.carProps.brand} | {item.carProps.model}</li>
                  <button>editar</button>
                  <button>apagar</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
}