import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public firebaseAUth: AngularFireAuth) {}

  async signIN(username: string, password: string) {
    await this.firebaseAUth.signInWithEmailAndPassword(username, password).then(
      (res) => {
        console.log(res);
        this.isLoggedIn = true;
        localStorage.setItem("currentuser", JSON.stringify(res.user));
      },
      (error) => {
        this.isLoggedIn = false;
        alert(error);
      }
    );
  }

  async signUP(username: string, password: string) {
    //console.log("signup inside");
    await this.firebaseAUth
      .createUserWithEmailAndPassword(username, password)
      .then(
        (res) => {
          this.isLoggedIn = true;
          //console.log(this.isLoggedIn);
          // console.log(JSON.stringify(res.user));
          // localStorage.setItem("currentuser", JSON.stringify(res.user));
        },
        (error) => {
          this.isLoggedIn = false;
          alert(error.message);
        }
      );
  }

  logout(username) {
    alert("hey");
    //this.firebaseAUth.signOut();
    localStorage.removeItem("currentuser");
  }
}
