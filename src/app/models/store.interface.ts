export interface productlist {
  product_id: string;
  product_name: string;
  product_price: string;
  product_route: string;
}

export interface productI {
  error: string;
  product_id: string;
  product_name: string;
  product_description: string;
  product_state: string;
  product_price: string;
  product_route: string;
  size: string;
  color: string;
}

export interface carI {
  product_id: string;
  product_size: string;
  product_color: string;
}

export interface params {
  category: number;
  collection: number;
}
