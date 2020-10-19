import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './template/login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { RoleComponent } from './template/role/role.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
