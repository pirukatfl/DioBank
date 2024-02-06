import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CommonAccount } from './class/CommonAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

peopleAccount.deposit(5)
peopleAccount.withdraw(10)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(500)
companyAccount.deposit(10)
companyAccount.getBalance()

const commonAccount: CommonAccount = new CommonAccount('Furlan', 12554)
commonAccount.deposit(-10)
commonAccount.deposit(20)
commonAccount.getBalance()