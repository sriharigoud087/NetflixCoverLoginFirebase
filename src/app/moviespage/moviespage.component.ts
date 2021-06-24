import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
@Component({
  selector: "app-moviespage",
  templateUrl: "./moviespage.component.html",
  styleUrls: ["./moviespage.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class MoviespageComponent implements OnInit {
  constructor(private actroute: ActivatedRoute, private router: Router) {}
  presentuserName: any;
  ngOnInit(): void {
    this.presentuserName = this.actroute.snapshot.paramMap.get("username");
  }
  logout() {
    //this.presentuserName = this.actroute.snapshot.paramMap.get("username");
    // console.log(this.presentuserName);
    alert("logging out");
    localStorage.removeItem("currentuser");

    this.router.navigate(["/homepage"]);
  }
}
