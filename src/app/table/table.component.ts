import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource: any;
  displayedColumns: string[] = ['userDate', 'userJobTitle', 'userDepartment', 'userHiringManagerName', 'userHiringManagerEmail'];

  @Input() userDataArray: any[];
  @Input() userData: FormGroup;

  ngOnInit(){
    console.log(this.userDataArray);
    this.dataSource = this.userDataArray;
  }

  onSubmit(){

    if (emailCheck(JSON.stringify(this.userData.value.userHiringManagerEmail)) == true){
      this.userDataArray.push({
        userDate: this.userData.value.userDate, 
        userJobTitle: this.userData.value.userJobTitle,
        userDepartment: this.userData.value.userDepartment,
        userHiringManagerName: this.userData.value.userHiringManagerName,
        userHiringManagerEmail: this.userData.value.userHiringManagerEmail
      });
    
        this.table.renderRows();
    }
    else {
      alert('Not a valid Email!');
    }
    
  }
}

function emailCheck(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}