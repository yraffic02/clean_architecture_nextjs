import { DeleteCarUseCase } from "@/@core/application/car/delete-car.use-case"
import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case"
import { Car } from "@/@core/domain/entities/car"
import { Registry, container } from "@/@core/infra/container/container-registry.api-local"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"

export const useCarList = () =>{
    const [carList, setCarList] = useState<Car[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {push} = useRouter()
    const [modalDelete, setModalDelete] = useState<number | null>(null)
    const [modalEdit, setModalEdit] = useState<number | null>(null)

    const handleOpenCloseModalDelete = (index: number | null) => {
      setModalDelete(index);
  }

    const handleOpenCloseModalEdit = (index: number | null) =>{
        setModalEdit(index)
    }

    const handleDeleteCar = async (id: string) =>{
        const DeleteCarUseCase = container.get<DeleteCarUseCase>(Registry.DeleteCarUseCase)
        const res = await DeleteCarUseCase.execute(id)
        if(res === 204){
            handleDataCar()
            handleOpenCloseModalDelete(null)
        } 
    }

    const handleDataCar = async ()=> {
        setLoading(true)
        const useCaseCar = container.get<ListCarsUseCase>(Registry.ListCarUseCase)
        const cars = await useCaseCar.execute()
        
        const carsString = JSON.stringify(cars)
        const carsObj = JSON.parse(carsString)
        
        setCarList(carsObj)
        return setLoading(false)
      }

      const handleRouter = (path: string) =>{
        push(path)
      }
    
      useEffect(()=>{
        handleDataCar()
      },[])
      
      return{
        carList,
        loading,
        push,
        handleDataCar,
        handleDeleteCar, 
        handleOpenCloseModalDelete,
        modalDelete,
        modalEdit,
        handleOpenCloseModalEdit,
        handleRouter
      }
}