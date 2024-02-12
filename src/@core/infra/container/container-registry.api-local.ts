import { Container } from "inversify";
import { apiLocal } from "../api-local";
import { CarHttpGateway } from "../gateways/cars-http.gateway";
import { ListCarsUseCase } from "@/@core/application/car/list-cars-use-case";

export const Registry = {
    AxiosAdapter: Symbol.for("AxiosAdapter"),

    CarGateway: Symbol.for("CarGateway"),
    ListCarUseCase: Symbol.for("ListCarUseCase"),
}

export const container = new Container;

container.bind(Registry.AxiosAdapter).toConstantValue(apiLocal)

container.bind(Registry.CarGateway).toDynamicValue((context)=>{
    return new CarHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ListCarUseCase).toDynamicValue((context)=>{
    return new ListCarsUseCase(context.container.get(Registry.CarGateway))
})