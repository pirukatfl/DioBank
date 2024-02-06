import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    try {
      if (this.validateStatus()) {
        this.setBalance(value)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
