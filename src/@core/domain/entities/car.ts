export type CarProps = {
  id?: string;
  brand: string;
  model: string;
  year: number;
};

export class Car {
  constructor(public carProps: CarProps) {}

  get brand(): string {
    return this.carProps.brand;
  }

  get model(): string {
    return this.carProps.model;
  }

  get year(): number {
    return this.carProps.year;
  }

  toJson(): string {
    return JSON.stringify(this.carProps);
  }
}
