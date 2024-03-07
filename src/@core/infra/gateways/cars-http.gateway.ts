import { Car, CarProps } from "@/@core/domain/entities/car";
import { CarGateway } from "@/@core/domain/gateways/car.gateway";
import { AxiosInstance } from "axios";

export class CarHttpGateway implements CarGateway {
  constructor(private http: AxiosInstance) {}

  async findAll(): Promise<Car[]> {
    try {
      const { data } = await this.http.get<Car[]>("/cars");
      const cars = data.map((car) => new Car(car));

      return cars;
    } catch (error) {
      console.error("Erro ao buscar datas:", error);
      throw error;
    }
  }

  async findById(id: string): Promise<Car> {
    try {
      const { data } = await this.http.get<Car>(`/cars/${id}`);
      const newCar = new Car(data);
      return newCar;
    } catch (error) {
      console.error("Erro ao buscar datas:", error);
      throw error;
    }
  }

  async add(car: CarProps): Promise<Car> {
    try {
      const { data } = await this.http.post<Car>("/cars", car);
      const newCar = new Car(data);
      return newCar;
    } catch (error) {
      console.error("Erro ao buscar datas:", error);
      throw error;
    }
  }

  async update(id: string, car: CarProps): Promise<Car> {
    try {
      const { data } = await this.http.patch<Car>(`/cars/${id}`, car);
      const newCar = new Car(data);
      return newCar;
    } catch (error) {
      console.error("Erro ao buscar datas:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<Number> {
    try {
      const { status } = await this.http.delete<Number>(`/cars/${id}`);
      return status;
    } catch (error) {
      console.error("Erro ao buscar datas:", error);
      throw error;
    }
  }
}
