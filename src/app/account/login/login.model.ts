export class Login {
    constructor(private email: string, private password: string, private category: string) {
        this.email = email
        this.password = password
        this.category = category
    }
}