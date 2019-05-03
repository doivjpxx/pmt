import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../services/service.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  customers;

  constructor(private service: ServiceService,
    private _sanitizer: DomSanitizer,
    ) {}

  ngOnInit() {
    this.service.list().subscribe((res: any) => {
      this.customers = res.data;
    });
  }

}
