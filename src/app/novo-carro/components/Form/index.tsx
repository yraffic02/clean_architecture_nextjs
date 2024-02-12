'use client'

import { Input } from "@/components/Input"

export const FormCars = () =>{
    return (
        <form className="flex flex-col justify-start w-2/6 p-7 gap-4">
                <Input 
                    placeholder="Marca"
                />
                <Input 
                    placeholder="Modelo"
                />
                <Input 
                    placeholder="Ano"
                />
                <button type="submit">Cadastrar</button>
        </form>
    )
}