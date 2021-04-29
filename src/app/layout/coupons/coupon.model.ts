import { Company } from "../companies/company.model"
import { Customer } from "../customers/customer.model"

export class Coupon {
    id: number
    company: Company
    title: string
    startDate = new Date()
    endDate = new Date()
    category: number
    amount: number
    description: string
    price: number
    imageUrl: string
    customers: Customer[]

    constructor(id: number, company: Company, title: string, startDate: Date, endDate: Date, category: number, amount: number, description: string, price: number, imageUrl: string, customers: Customer[]) {
        this.id = id
        this.company = company
        this.title = title
        this.startDate = startDate
        this.endDate = endDate
        this.category = category
        this.amount = amount
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.customers = customers
    }
}