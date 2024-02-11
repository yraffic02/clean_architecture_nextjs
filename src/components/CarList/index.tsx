'use client'
import { useEffect, useState } from "react"

type car = {
  id: number,
  marca: string
}

export const CarList = () =>{
    const [list, setList] = useState<car[]>([])

  const cars: car[] = [
    {id: 1, marca: 'fiat'},
    {id: 2, marca: 'chevrolet'}
  ]

  const handleGetList = () =>{
    setList(cars)
  }

  const handleDelete = (id: number) => {
    const listRemoved = list.filter( i => i.id != id)
    setList(listRemoved)
  }

  useEffect(()=>{
    handleGetList()
  },[])
    return (
        <div className="flex flex-col items-start gap-2 border-red-700 border-2 rounded-md p-3 w-2/5  h-96">
        <div className="flex items-start gap-6 w-full">
          <h2>Marca</h2>
          <h2>Modelo</h2>
          <h2>Ano</h2>
        </div>
        <ul>
          {
            list.length <= 0 && <h1>Não há carros registrados!!</h1>
          }
          {
            list.length > 0 && list.map((item, index)=>{
              return (
                <div className="flex items-start gap-6 w-full">
                  <li key={item.id} >{item.marca} </li>
                  <button>editar</button>
                  <button onClick={()=> handleDelete(item.id)}>apagar</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
}