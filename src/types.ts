interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export type BtnTypes = 'mat-flat-button' | 'mat-raised-button' | 'mat-stroked-button'
