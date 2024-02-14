'use client'
import { useCarList } from "@/utils/hooks/useCarList"
import { Input } from "../Input"
import { Modal } from "../Modal"
import { Spinner } from "../Spinner"

export const CarList = () =>{
  const {
    carList,
    handleOpenCloseModalDelete,
    loading,
    handleRouter,
    handleOpenCloseModalEdit,
    modalDelete,
    handleDeleteCar,
    modalEdit
  } = useCarList()
  
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
              loading && <Spinner />
            }
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
                          onClick={()=> handleRouter(`/carro/${item.carProps.id}`)}
                        >
                          <p>{item.carProps.brand}</p>
                          <p>{item.carProps.model}</p> 
                          <p>{item.carProps.year}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button onClick={()=> handleOpenCloseModalEdit(index)}>editar</button>
                          <button onClick={()=> handleOpenCloseModalDelete(index)} >apagar</button>
                        </div>
                      </div>
                      <Modal
                          isOpen={modalDelete === index}
                          onClose={()=> handleOpenCloseModalDelete(null)}
                          title="Tem certeza que deseja apagar este carro?"
                      >
                          <button
                          onClick={()=> handleOpenCloseModalDelete(null)}
                          className="mt-4 bg-red-500 text-white p-2 rounded"
                          >
                          Não
                          </button>
                          <button
                          className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
                          onClick={()=> handleDeleteCar(item.carProps.id!)}
                          >
                          Sim
                          </button>
                      </Modal> 
                    </li>
                    
                    <Modal
                        isOpen={modalEdit == index}
                        onClose={()=> handleOpenCloseModalEdit(null)}
                        title="Tem certeza que deseja apagar este carro?"
                    >
                        <form className="flex flex-col w-full gap-3">
                          <Input 
                            defaultValue={item.carProps.brand}
                          />
                          <Input 
                            defaultValue={item.carProps.model}
                          />
                          <Input 
                            defaultValue={item.carProps.year}
                          />
                        </form>
                        <button
                            onClick={()=> handleOpenCloseModalEdit(null)}
                            className="mt-4 bg-red-500 text-white p-2 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            className="mt-4 bg-green-500 text-white p-2 rounded ml-6"

                        >
                            Salvar
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