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

export interface User {
  username: string
  email: string
  password: string
}

export interface UserType {
  user: User
}

export interface UserRegisterResponse {
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string | null
  }
}
