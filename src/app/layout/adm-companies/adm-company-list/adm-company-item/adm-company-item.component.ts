import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/layout/companies/company.model';

@Component({
  selector: 'app-adm-company-item',
  templateUrl: './adm-company-item.component.html',
  styleUrls: ['./adm-company-item.component.css']
})
export class AdmCompanyItemComponent implements OnInit {

  @Input()company:Company
  @Input()id:number
  constructor() { }

  ngOnInit(): void {
  }
}
