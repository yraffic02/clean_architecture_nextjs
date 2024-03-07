"use client";
import { useCarList } from "@/utils/hooks/useCarList";
import { Spinner } from "../Spinner";
import { DeleteModal } from "./components/ModalDelete";
import { Modal } from "../Modal";
import { Input } from "../Input";

export const CarList = () => {
  const {
    carList,
    handleOpenCloseModalDelete,
    loading,
    handleRouter,
    handleOpenCloseModalEdit,
    modalDelete,
    handleDeleteCar,
    modalEdit,
    handleSubmit,
    onSubmit,
    register,
    errors,
  } = useCarList();

  return (
    <>
      <div className="border-red-700 border-2 w-2/5  h-96 flex flex-col items-start gap-2 rounded-md ">
        <div className="flex items-start gap-6 bg-slate-500 text-white w-full p-4">
          <div className="flex items-center justify-between w-2/4">
            <h2 className="w-1/3">Marca</h2>
            <h2 className="w-1/3">Modelo</h2>
            <h2 className="w-1/3">Ano</h2>
          </div>
        </div>
        <div className="overflow-auto w-full">
          <ul className="p-4">
            {loading && <Spinner />}
            {carList.length <= 0 && <h1>Não há carros registrados!!</h1>}
            {carList.length > 0 &&
              carList.map((item, index) => {
                return (
                  <>
                    <li key={item.carProps.id} className="mb-1">
                      <div className="flex justify-between gap-6 w-full">
                        <div
                          className="flex items-center justify-between w-2/4 cursor-pointer"
                          onClick={() =>
                            handleRouter(`/carro/${item.carProps.id}`)
                          }
                        >
                          <p className="w-1/3">{item.carProps.brand}</p>
                          <p className="w-1/3">{item.carProps.model}</p>
                          <p className="w-1/3">{item.carProps.year}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleOpenCloseModalEdit(index)}
                            className="bg-gray-500 text-white p-2 rounded"
                          >
                            editar
                          </button>
                          <button
                            onClick={() => handleOpenCloseModalDelete(index)}
                            className="bg-red-500 text-white p-2 rounded"
                          >
                            apagar
                          </button>
                        </div>
                      </div>
                    </li>

                    <DeleteModal
                      handleDeleteCar={handleDeleteCar}
                      onClose={() => handleOpenCloseModalDelete(null)}
                      index={index}
                      isOpen={modalDelete}
                      item={item}
                    />

                    <Modal
                      isOpen={modalEdit == index}
                      onClose={() => handleOpenCloseModalEdit(null)}
                      title="Tem certeza que deseja apagar este carro?"
                    >
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-full gap-3"
                      >
                        <input
                          hidden
                          {...register("id")}
                          defaultValue={item.carProps.id!}
                        />
                        <Input
                          defaultValue={item.carProps.brand}
                          {...register("brand")}
                        />
                        <Input
                          defaultValue={item.carProps.model}
                          {...register("model")}
                        />
                        <Input
                          defaultValue={item.carProps.year}
                          {...register("year")}
                        />
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleOpenCloseModalEdit(null)}
                            className="mt-4 bg-red-500 text-white p-2 rounded"
                          >
                            Cancelar
                          </button>
                          <button
                            className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
                            type="submit"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </Modal>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};
