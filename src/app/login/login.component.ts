import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName: string = "BlisS";
  titulo: string = '';
  password: string = '';
  form: any = {};
  require: string = '';
  message: string = '';
  show = false;
  show2 = false;
  fecha = Date.now();
  tachar = false;

  learners = [
    {
      name: "ricky",
      age: 59
    },
    {
      name: "riky",
      age: 40
    },
    {
      name: "Ric",
      age: 12
    }
  ]

  // type: string = 'password'

  onkeydown(value){
    this.password = value
  }

  testing(){
    if(this.form.password.length < 6){
      this.message = "Tu password es muy pequeño"
      this.show = true;
      this.show2 = false;
    }else{
      this.message = "Bienvenido"
      this.show = false
      this.show2 = true
    }
  }

  togglePassword(value, pass){
    pass.type = value ? "text" : "password"  
}





  ngOnInit() {
  }

}
