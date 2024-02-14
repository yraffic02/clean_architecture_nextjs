import { Car } from "@/@core/domain/entities/car";
import { CarGateway } from "@/@core/domain/gateways/car.gateway";

export class UpdateCarUseCase {
    constructor(private CarGate: CarGateway){}

    async execute(id: string,car: Car): Promise<Car>{
        return this.CarGate.update(id,car)
    }
}