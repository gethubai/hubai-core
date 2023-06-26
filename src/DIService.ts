export type DIContainer = {
  resolve<T>(key: string): T;
};

export class DIService {
  private static container: DIContainer;
  constructor() {  }

  public static setContainer(container: DIContainer) {
    this.container = container;
  }

  public static get<T>(key: string): T {
    return this.container.resolve<T>(key);
  }
}
