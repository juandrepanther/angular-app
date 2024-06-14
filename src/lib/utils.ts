export function truncateString(str: string): string {
  if (str.length <= 100) {
    return str
  } else {
    return str.slice(0, 120) + '...'
  }
}

export const emptyProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: { rate: 0, count: 0 },
}

export function storeToken(token: string) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}
