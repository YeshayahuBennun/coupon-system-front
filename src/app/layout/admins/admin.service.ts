import { EventEmitter, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/account/shared/storage.service";
import { Admin } from "./admin.model";

@Injectable()
export class AdminService {

    admin: Admin
    adminEmitter = new EventEmitter<Admin>()

    constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute) {
    }

    async fetchAdmin() {
        (await this.storageService.getAdmin()).subscribe(admin => {
            this.admin = admin
            this.adminEmitter.emit(admin)
        })
    }

    async updateAdmin(admin: Admin) {
        (await this.storageService.updateAdmin(admin)).subscribe(admin => {
            this.admin = admin
            this.fetchAdmin()
            window.alert('Update Success')
            this.router.navigate(['/admins/:id/edit'])
        })
    }
}