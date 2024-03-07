import { Car } from "@/@core/domain/entities/car";
import { Modal } from "@/components/Modal";

interface IModalDelete {
  isOpen: number | null;
  index: number;
  onClose: () => void;
  handleDeleteCar: (id: string) => void;
  item: Car;
}

export const DeleteModal = ({
  isOpen,
  onClose,
  handleDeleteCar,
  item,
  index,
}: IModalDelete) => {
  return (
    <Modal
      isOpen={isOpen === index}
      onClose={onClose}
      title="Tem certeza que deseja apagar este carro?"
    >
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white p-2 rounded"
      >
        Não
      </button>
      <button
        className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
        onClick={() => handleDeleteCar(item.carProps.id!)}
      >
        Sim
      </button>
    </Modal>
  );
};
