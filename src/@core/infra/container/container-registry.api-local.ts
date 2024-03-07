import { Container } from "inversify";
import { apiLocal } from "../api-local";
import { CarHttpGateway } from "../gateways/cars-http.gateway";
import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case";
import { GetCarUseCase } from "@/@core/application/car/get-car.use-case";
import { AddCarUseCase } from "@/@core/application/car/add-car.use-case";
import { DeleteCarUseCase } from "@/@core/application/car/delete-car.use-case";
import { UpdateCarUseCase } from "@/@core/application/car/update-car.use-cas";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  CarGateway: Symbol.for("CarGateway"),
  ListCarUseCase: Symbol.for("ListCarUseCase"),
  GetCarUseCase: Symbol.for("GetCarUseCase"),
  AddCarUseCase: Symbol.for("AddCarUseCase"),
  DeleteCarUseCase: Symbol.for("DeleteCarUseCase"),
  UpdateCarUseCase: Symbol.for("UpdateCarUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(apiLocal);

container.bind(Registry.CarGateway).toDynamicValue((context) => {
  return new CarHttpGateway(context.container.get(Registry.AxiosAdapter));
});

container.bind(Registry.ListCarUseCase).toDynamicValue((context) => {
  return new ListCarsUseCase(context.container.get(Registry.CarGateway));
});

container.bind(Registry.GetCarUseCase).toDynamicValue((context) => {
  return new GetCarUseCase(context.container.get(Registry.CarGateway));
});

container.bind(Registry.AddCarUseCase).toDynamicValue((context) => {
  return new AddCarUseCase(context.container.get(Registry.CarGateway));
});

container.bind(Registry.DeleteCarUseCase).toDynamicValue((context) => {
  return new DeleteCarUseCase(context.container.get(Registry.CarGateway));
});

container.bind(Registry.UpdateCarUseCase).toDynamicValue((context) => {
  return new UpdateCarUseCase(context.container.get(Registry.CarGateway));
});
