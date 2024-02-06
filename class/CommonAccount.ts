import { DioAccount } from "./DioAccount";

export class CommonAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    const ADD_VAL: number = 10

    if(this.validateStatus()){
      this.setBalance(value + ADD_VAL)
      console.log(`Voce depositou R$${value} reais e seu saldo é: R$${this.getBalance()}`)
    }
  }
}