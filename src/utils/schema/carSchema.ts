import { CarProps } from '@/@core/domain/entities/car';
import * as yup from 'yup';

export type CarFormType = CarProps

export const CarScheme: yup.ObjectSchema<CarFormType> = yup.object().shape({
    brand: yup.string().required('A marca do carro é obrigatória.'),
    model: yup.string().required('O modelo do carro é obrigatório.'),
    year: yup
        .number()
        .required('O ano do carro é obrigatório.')
        .typeError('O ano do carro deve ser um número.')
        .integer('O ano do carro deve ser um número inteiro.')
        .max(new Date().getFullYear(), 'O ano do carro não pode ser maior que o ano atual.')
        .min(new Date().getFullYear() - 15, 'O carro não pode ter mais de 15 anos.')
})