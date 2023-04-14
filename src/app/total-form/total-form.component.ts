import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-total-form',
  templateUrl: './total-form.component.html',
  styleUrls: ['./total-form.component.css']
})
export class TotalFormComponent {
  userDataArray: any[] = [];
  userData: FormGroup;

  constructor(private formBuild: FormBuilder){ }

  // when component is initialized, make
  ngOnInit(): void {
    this.userData = this.formBuild.group({
      userDate: [''],
      userJobTitle: [''],
      userDepartment: [''],
      userHiringManagerName: [''],
      userHiringManagerEmail: [''],
    });
  }
}
