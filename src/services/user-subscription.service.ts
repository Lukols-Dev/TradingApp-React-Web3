import { http } from "../config/axios";
import { Product, ProductPrice, Subscription } from "../types/stripe.types";

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

  //Get app subscription by id
  static async getSubscriptionID(subscriptionID: string) {
    return (await http.get<Subscription>(`/subscriptions/${subscriptionID}`))
      .data;
  }

  //Get all app subscriptions
  static async getAllSubscription() {
    return (await http.get<any>(`/subscriptions`)).data;
  }

  //Delete subscription by ID
  static async deleteSubscription(subsctiptionID: string) {
    return await http.delete(`/subscriptions/${subsctiptionID}`);
  }

  static async getSubscriptionBySearch() {
    return await http.get<Subscription>(
      "/subscriptions/search?query=email:lukols.dev@gmail.com"
    );
  }

  //Customers:
  //Get all customers
  static async getAllCustomers() {
    return await (
      await http.get<any>("/customers")
    ).data;
  }
}
