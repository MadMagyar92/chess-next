export interface ObjectService<T> {
  get(id: number): T | undefined;
  post(obj: T): T | undefined;
  delete(id: number): T | undefined;
}