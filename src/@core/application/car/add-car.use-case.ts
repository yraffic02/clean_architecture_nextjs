import { Car } from "@/@core/domain/entities/car";
import { CarGateway } from "@/@core/domain/gateways/car.gateway";

export class GetCarUseCase {
    constructor(private CarGate: CarGateway){}

    async execute(car: Car): Promise<Car>{
        return this.CarGate.add(car)
    }
}