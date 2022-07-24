import { http } from "../config/axios";
import { Product, ProductPrice } from "../types/stripe.types";

export class UserSubscriptionService {
  //Get product by id
  static async getProductID(productID: string) {
    return await (
      await http.get<Product>(`/products/${productID}`)
    ).data;
  }
  //Get list of products
  static async getAllProducts() {
    return (await http.get<Product[]>(`/products`)).data;
  }
  //Get product price by id_price
  static async getProductPriceID(priceID: string) {
    return (await http.get<ProductPrice>(`/prices/${priceID}`)).data;
  }
}
