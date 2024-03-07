"use client";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { UseHookFormCar } from "@/utils/hooks/useFormCar";

export const FormCars = () => {
  const { errors, handleSubmit, onSubmit, register } = UseHookFormCar();
  return (
    <form
      className="flex flex-col justify-start w-2/6 p-7 gap-4 bg-gray-300 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label labelHtmlFor="brand">Marca</Label>
      <Input id="brand" {...register("brand")} />
      {errors.brand && (
        <span className="text-red-600 text-xs">{errors.brand?.message}</span>
      )}
      <Label labelHtmlFor="model">Modelo</Label>
      <Input id="model" {...register("model")} />
      {errors.brand && (
        <span className="text-red-600 text-xs">{errors.model?.message}</span>
      )}
      <Label labelHtmlFor="year">Ano</Label>
      <Input id="year" {...register("year")} />
      {errors.year && (
        <span className="text-red-600 text-xs">{errors.year?.message}</span>
      )}
      <button type="submit" className="p-1 rounded-lg bg-green-700 text-white">
        Cadastrar
      </button>
    </form>
  );
};
