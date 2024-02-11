import { CarProps } from '@/@core/domain/entities/car';
import * as yup from 'yup';

type CarFormType = CarProps

export const CarScheme: yup.ObjectSchema<CarFormType> = yup.object().shape({
    brand: yup.string().required('A marca do carro é obrigatória.'),
    model: yup.string().required('O modelo do carro é obrigatório.'),
    year: yup
        .number()
        .required('O ano do carro é obrigatório.')
        .integer('O ano do carro deve ser um número inteiro.')
        .min(1900, 'O ano do carro deve ser igual ou maior que 1900.')
        .max(new Date().getFullYear(), 'O ano do carro não pode ser maior que o ano atual.')
        .min(new Date().getFullYear() - 15, 'O carro não pode ter mais de 15 anos.')
})