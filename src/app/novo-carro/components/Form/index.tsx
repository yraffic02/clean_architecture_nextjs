'use client'

export const FormCars = () =>{
    return (
        <form className="flex flex-col justify-start w-2/6 p-7 gap-4">
                <input 
                    placeholder="Marca"
                />
                <input 
                    placeholder="Modelo"
                />
                <input 
                    placeholder="Ano"
                />
                <button type="submit">Cadastrar</button>
        </form>
    )
}