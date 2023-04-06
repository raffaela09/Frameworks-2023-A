import { Component } from '@angular/core';

@Component({
  selector: 'app-login-beto',
  templateUrl: './login-beto.component.html',
  styleUrls: ['./login-beto.component.css']
})
export class LoginBetoComponent {

  isError = false;

  isCorrect = false;

  user = "" 

  pwd = ""

  login(){
    

    if(this.user == "rafa" && this.pwd == "rafa") {
      this.isCorrect = true;
      this.isError = false;
    }

    else {
      this.isCorrect = false;
      this.isError = true;
    }

    console.log("User = " + this.user + " Password = " + this.pwd)

  }

}
