import { Car, CarProps } from "../entities/car";


export interface CarGateway {
    findAll(): Promise<Car[]>; 
    findById(id: string): Promise<Car>; 
    add(car: CarProps): Promise<Car>;
    update(id: string, car: CarProps): Promise<Car>; 
    delete(id: string): Promise<Number>;
}