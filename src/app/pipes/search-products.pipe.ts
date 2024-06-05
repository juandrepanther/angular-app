import { Pipe, PipeTransform } from '@angular/core'
import { Product } from 'types'

@Pipe({
  name: 'searchProducts',
  standalone: true,
})
export class SearchProductsPipe implements PipeTransform {
  transform(data: Product[], search: string): Product[] {
    return data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  }
}
