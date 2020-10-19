import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    name: '',
    password: ''
  };

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  checkLoggedInUser(currentUser: User) {
    this.spinner.show();
    console.log(currentUser);
    if (currentUser.name == 'company' && currentUser.password == 'company') {
      this.router.navigateByUrl('company/dashboard');
      this.toastrService.success('Login Successfully', 'Lazy Loading');
    }
    if (currentUser.name == 'employee' && currentUser.password == 'employee') {
      this.router.navigateByUrl('employee/dashboard');
      this.toastrService.success('Login Successfully', 'Lazy Loading');
    }
    if (currentUser.name == 'manager' && currentUser.password == 'manager') {
      this.router.navigateByUrl('manager/dashboard');
      this.toastrService.success('Login Successfully', 'Lazy Loading');
    }
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
