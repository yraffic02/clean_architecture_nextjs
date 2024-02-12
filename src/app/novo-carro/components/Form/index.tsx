'use client'

import { Input } from "@/components/Input"
import { Label } from "@/components/Label"

export const FormCars = () =>{
    return (
        <form className="flex flex-col justify-start w-2/6 p-7 gap-4">
                <Label labelHtmlFor="brand">
                    Marca
                </Label>
                <Input
                    id="brand" 
                />
                <Label labelHtmlFor="model">
                    Modelo
                </Label>
                <Input 
                    id="model"
                />
                <Label labelHtmlFor="year">
                    Ano
                </Label>
                <Input 
                    id="year"
                />
                <button type="submit">Cadastrar</button>
        </form>
    )
}