import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SuccessService {
  successStatus = false

  setSuccessStatus(status: boolean) {
    this.successStatus = status
  }

  message(message: string) {
    alert(message)
  }
}
