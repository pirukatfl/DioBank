export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou R$${value} reais`)
    }
  }

  withdraw = (value: number): void => {
    try {
      if(this.validateStatus()){
        if (value > this.balance) {
          throw new Error('Saldo insuficiente!')
        }
        this.balance -= value
        console.log(`Voce sacous R$${value} reais`)
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  getBalance = (): number => {
    console.log('Seu saldo é de: R$'+ this.balance)
    return this.balance
  }

  setBalance = (value: number): void => {
    try {
      if (this.valueIsPositive(value)) {
        this.balance += value
      }
    } catch (error) {
      console.log(error)
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected valueIsPositive = (value: number): boolean => {
    if (value > 0) {
      return true
    }
    throw new Error('valor precisa ser maios que 0 (zero)')
  }
}
