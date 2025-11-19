import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  username: string = "";
  myname: string = "omar";


  toggleLogin() {
    if(this.username.trim() === this.myname){
      this.isLoggedIn = true;
    } else {
      alert("prenom incorrect");
    }
  }

}






