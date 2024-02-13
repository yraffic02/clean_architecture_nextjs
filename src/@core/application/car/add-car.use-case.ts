import { Car } from "@/@core/domain/entities/car";
import { CarGateway } from "@/@core/domain/gateways/car.gateway";

export class AddCarUseCase {
    constructor(private CarGate: CarGateway){}

    async execute(car: Car): Promise<Car>{
        return this.CarGate.add(car)
    }
}