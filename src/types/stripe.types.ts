export interface Product {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: string;
  description: null;
  images: string[];
  livemode: boolean;
  metadata: {};
  name: string;
}

export interface ProductPrice {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  product: string;
  recurring: {
    interval: string;
    interval_count: number;
    usage_type: string;
  };
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

export interface Subscription {
  id: string;
  object: string;
  canceled_at: number;
  created: number;
  current_period_end: number;
  current_period_start: number;
  customer: string;
  status: string;
}
export interface ISubscription {
  id: string;
  object: string;
  canceled_at: number;
  created: number;
  current_period_end: number;
  current_period_start: number;
  start_date: number;
  customer: string;
  status: string;
  plan: {
    amount: number;
    interval: string;
    currency: string;
  };
}

export interface ICustomer {
  email: string;
  id: string;
}

export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
