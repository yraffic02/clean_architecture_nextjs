'use client'
import { Car } from "@/@core/domain/entities/car"
import { useRouter } from "next/navigation"
import { Modal } from "../Modal"
import { useEffect, useState } from "react"
import { Registry, container } from "@/@core/infra/container/container-registry.api-local"
import { DeleteCarUseCase } from "@/@core/application/car/delete-car.use-case"
import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case"


export const CarList = () =>{
  const [carList, setCarList] = useState<Car[]>([])
  const [loading, setLoading] = useState<false>(false)
  const {push} = useRouter()
  const [modalDelete, setModalDelete] = useState<boolean>(false)

  const handleOpenCloseModalDelete = () =>{
    setModalDelete(!modalDelete)
  }

  const handleDeleteCar = async (id: string) =>{
    const DeleteCarUseCase = container.get<DeleteCarUseCase>(Registry.DeleteCarUseCase)
    const res = await DeleteCarUseCase.execute(id)

    console.log(res)
    if(res === 204){
      handleDataCar()
    }
  }

  const handleDataCar = async ()=> {
    const useCaseCar = container.get<ListCarsUseCase>(Registry.ListCarUseCase)
    const cars = await useCaseCar.execute()
    
    const carsString = JSON.stringify(cars)
    const carsObj = JSON.parse(carsString)
    
    return setCarList(carsObj)
  }

  useEffect(()=>{
    handleDataCar()
  },[])
  
  return (
    <>
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
              carList.length <= 0 && <h1>Não há carros registrados!!</h1>
            }
            {
              carList.length > 0 && carList.map((item, index)=>{
                return (
                  <>
                    <li 
                      key={item.carProps.id} 
                      >
                      <div className="flex justify-between gap-6 w-full">
                        <div 
                          className="flex items-center justify-between  w-2/4 cursor-pointer"
                          onClick={()=> push(`/carro/${item.carProps.id}`)}
                        >
                          <p>{item.carProps.brand}</p>
                          <p>{item.carProps.model}</p> 
                          <p>{item.carProps.year}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button>editar</button>
                          <button onClick={handleOpenCloseModalDelete} >apagar</button>
                        </div>
                      </div>
                    </li>
                    <Modal
                      isOpen={modalDelete}
                      onClose={handleOpenCloseModalDelete}
                      title="Tem certeza que deseja apagar este carro?"
                    >
                      <button
                        onClick={handleOpenCloseModalDelete}
                        className="mt-4 bg-red-500 text-white p-2 rounded"
                      >
                        Não
                      </button>
                      <button
                        className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
                        onClick={()=> handleDeleteCar(String(item.carProps.id!))}
                      >
                        Sim
                      </button>
                    </Modal>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}