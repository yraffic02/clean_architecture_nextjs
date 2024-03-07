import { Car } from "@/@core/domain/entities/car";
import { CarGateway } from "@/@core/domain/gateways/car.gateway";

export class ListCarsUseCase {
  constructor(private CarGate: CarGateway) {}

  async execute(): Promise<Car[]> {
    return this.CarGate.findAll();
  }
}
