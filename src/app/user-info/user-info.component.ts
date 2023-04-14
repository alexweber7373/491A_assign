import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  
  // Important info for date
  today = new Date();

  // Possible Departments
  departments: Department[] = [
    {value: 'Human Resources', viewValue: 'Human Resources'},
    {value: 'Software Development', viewValue: 'Software Development'},
    {value: 'Marketing', viewValue: 'Marketing'},
  ];

  @Input() userData: FormGroup;

}

// Interface for what should be in a Department
export interface Department {
  value: string,
  viewValue: string,
}
