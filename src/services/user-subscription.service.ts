import { http, httpAPI } from "../config/axios";
import {
  ICheckoutSessionData,
  Product,
  ProductPrice,
  Subscription,
} from "../types/stripe.types";

export class UserSubscriptionService {
  // NEW VERSION

  static async createCheckoutSession(priceID: string, customerID: string) {
    return (
      await httpAPI.post<string>("/create-session", {
        priceID: priceID,
        customerID: customerID,
      })
    ).data;
  }

  static async getCheckoutSessionData(sessionID: string) {
    return await (
      await httpAPI.get<ICheckoutSessionData>(`/order/success/${sessionID}`)
    ).data;
  }

  static async getProductID(productID: string) {
    return (await httpAPI.get<Product>(`/product/${productID}`)).data;
  }

  static async getProductPriceID(priceID: string) {
    return (await httpAPI.get<ProductPrice>(`/product-price/${priceID}`)).data;
  }

  static async getAllProducts() {
    return (await httpAPI.get<Product[]>(`/products`)).data;
  }

  // OLD version
  //Get product by id
  // static async getProductID(productID: string) {
  //   return await (
  //     await http.get<Product>(`/products/${productID}`)
  //   ).data;
  // }

  //Get list of products
  // static async getAllProducts() {
  //   return (await http.get<Product[]>(`/products`)).data;
  // }

  //Get product price by id_price
  // static async getProductPriceID(priceID: string) {
  //   return (await http.get<ProductPrice>(`/prices/${priceID}`)).data;
  // }

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

  static async deleteCustomer(customerID: string) {
    return await http.delete<any>(`/customers/${customerID}`);
  }
}
