import { CarGateway } from "@/@core/domain/gateways/car.gateway";

export class DeleteCarUseCase {
  constructor(private CarGate: CarGateway) {}

  async execute(id: string): Promise<Number> {
    return this.CarGate.delete(id);
  }
}
