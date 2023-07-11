export type getTypeProducts = {
  data: typeProduct[];
}

export type getSingleTypeProduct = {
  data: typeProduct;
}

export interface typeProduct {
  quantity: number
  id: number
  title: string
  price: number
  description?: string
  category?: string
  image: string
  rating?: Rating
}

export interface Rating {
  rate: number
  count: number
}