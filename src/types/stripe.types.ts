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
  customer: string;
  status: string;
}

export interface ICustomer {
  email: string;
  id: string;
}
