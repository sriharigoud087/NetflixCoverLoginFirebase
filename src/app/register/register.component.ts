import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlName,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";
interface Plan {
  name: string;
  code: string;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  plans: Plan[];

  selectedPlan: Plan;

  regForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    age: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    cardNumber: new FormControl("", Validators.required),
    expiryDate: new FormControl("", Validators.required),
    securityCode: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
  ) {
    this.plans = [
      { name: "1 Month 99rs", code: "1M" },
      { name: "2 Months 199rs", code: "2M" },
      { name: "3 Months 299rs", code: "3M" },
      { name: "6 Months 599rs", code: "6M" },
      { name: "12 Months 1119rs", code: "12M" },
    ];
  }
  ngOnInit() {}
  isSignedIn = false;
  async submit() {
    var regdata = this.regForm.value;
    let username = regdata.userName;
    let password = regdata.passWord;
    //console.log(username, password);
    await this.firebaseService.signUP(username, password);
    if (this.firebaseService.isLoggedIn) {
      alert("signedUp SUccesfully");
      console.log(this.firebaseService.isLoggedIn);
      this.isSignedIn = true;
      this.router.navigate(["/homepage"]);
    } else {
      this.router.navigate(["/register"]);
    }
    //   let val=JSON.stringify(this.regForm.value);
    //   //console.log(val);
    //  localStorage.setItem(username,val);
  }
}
