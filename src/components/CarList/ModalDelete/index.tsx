import { Modal } from "@/components/Modal"

interface ModalDeleteProps {
    modalDelete: boolean,
    handleOpenCloseModalDelete: ()=> void,
    handleDeleteCar: (idItem: string) => void,
    idItem: string
}

export const ModalDelete = ({
    handleDeleteCar, 
    handleOpenCloseModalDelete, 
    modalDelete,
    idItem
}: ModalDeleteProps) =>{
    
    return(
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
            onClick={()=> handleDeleteCar(idItem)}
            >
            Sim
            </button>
        </Modal>
    )
}