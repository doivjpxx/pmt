import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      note: ['']
    })
  }

  onSubmit(){
    this.service.post(this.form.value).subscribe(res=>console.log(res));
  }

}
