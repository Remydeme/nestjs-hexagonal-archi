export interface ProductsRepository {
  addNewProducts(product): Promise<void>;
}
