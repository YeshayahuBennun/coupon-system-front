import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  
  @ViewChild('f') adminForm: NgForm
  
  id: number
  admin: Admin = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }
  
  
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.adminService.fetchAdmin()
    this.adminService.adminEmitter.subscribe(admin => {
      this.admin = admin
    })
  }

  onSubmit() {
    this.adminService.updateAdmin(this.admin)
  }

  onAdminClear() {
    this.adminForm.reset()
  }

  onAdminCancel() {
    this.router.navigate(['/adm-coupons/'], { relativeTo: this.route })
  }
}
