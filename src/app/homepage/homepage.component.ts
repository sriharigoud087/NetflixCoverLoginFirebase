import { Component, Input, OnInit } from "@angular/core";
import { from } from "rxjs";
import {
  FormGroup,
  FormControlName,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router, Route } from "@angular/router";
import { AuthenticationGuard } from "../authentication.guard";
import { FirebaseService } from "../services/firebase.service";
import { MessageService } from "primeng/api";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  displaySignin: boolean = false;

  userForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(
    private router: Router,
    private authenticationGuard: AuthenticationGuard,
    private firebaseService: FirebaseService,
    private messageService: MessageService
  ) {}
  showSignin() {
    this.displaySignin = true;
  }
  presentuserName: string = "";
  ngOnInit(): void {
    if (localStorage.getItem("currentuser") != null) {
      this.router.navigate(["/moviespage"]);
    } else {
      this.router.navigate(["/homepage"]);
    }
  }
  async signIn() {
    var userData = this.userForm.value;
    console.log(userData.userName, userData.password);
    await this.firebaseService.signIN(userData.userName, userData.password);
    {
      if (this.firebaseService.isLoggedIn) {
        this.router.navigate(["/moviespage"]);
      } else {
        //this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
        alert("Enter userName password Correctly");
      }
    }
    //var data=localStorage.getItem(userData.userName);
    //  let decision= this.authenticationGuard.canActivate(userData.userName);
    //   if(decision)
    //       this.router.navigate(['/moviespage']);
    //   else
    //     alert('Enter phoneNumber Correctly or Register');
  }

  onReload() {
    window.location.reload();
  }
}
