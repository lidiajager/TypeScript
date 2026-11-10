import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { YoungAccount } from './class/YoungAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(0)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5)
console.log(companyAccount)

companyAccount.getLoan(500)
console.log(companyAccount)

const contaJovem: YoungAccount = new YoungAccount('Pedro', 40)
contaJovem.deposit(20)
console.log(contaJovem)
contaJovem.getBalance()
contaJovem.getLoan(30)
console.log(contaJovem)

const contaFernanda: YoungAccount = new YoungAccount ('Fernanda', 50)
contaFernanda.deposit(8)
console.log(contaFernanda)