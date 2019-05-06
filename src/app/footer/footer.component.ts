import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ServiceService } from "../services/service.service";
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @ViewChild("imageInput") imageInput: ElementRef;
  form: FormGroup;
  url: any;

  selectedFile: File = null;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      note: ["", Validators.required]
    });
  }

  onUploadImage(event): void {
    this.selectedFile = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.url = reader.result;
    };
  }

  onSubmit() {
    forkJoin(
      this.service.uploadImage(this.selectedFile),
      this.service.post(this.form.value),
    ).subscribe(res => {
      console.log(res);
      alert('Đăng tải thành công!');
      this.router.navigate(["/home"])
    });
  }

  onBrowser(event: any): void {
    event.preventDefault();
    const e: HTMLElement = document.getElementById("imgupload") as HTMLElement;
    e.click();
  }

  onRemove(): void {
    this.url = "";
    this.imageInput.nativeElement.value = "";
  }
}
