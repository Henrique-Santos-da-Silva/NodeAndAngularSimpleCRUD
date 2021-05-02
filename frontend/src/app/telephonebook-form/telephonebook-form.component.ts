import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Telephone} from '../models/Telephone';
import {ActivatedRoute} from '@angular/router';
import {TelephonebookService} from '../telephonebook.service';

@Component({
  selector: 'app-telephonebook-form',
  templateUrl: './telephonebook-form.component.html',
  styleUrls: ['./telephonebook-form.component.css']
})
export class TelephonebookFormComponent implements OnInit {

  formulario: FormGroup;
  telephone = {} as Telephone;

  constructor(private fb: FormBuilder,
              private service: TelephonebookService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const telephone = this.route.snapshot.data['telephone'];

    this.formulario = new FormGroup({
      id: new FormControl(telephone.id),
      name: new FormControl(telephone.name, Validators.required),
      email: new FormControl(telephone.email, Validators.required),
      telephone: new FormControl(telephone.telephone, Validators.required)
    });
  }

  createTelephone() {
    this.telephone = {
      name: this.formulario.value.name,
      email: this.formulario.value.email,
      telephone: this.formulario.value.telephone
    }

    this.service.createTelephone(this.telephone).subscribe(
      success => {
        this.location.back();
      },
      error => console.error(error)
    );
  }

  updateTelephone() {

    console.log(this.formulario.value);
    this.service.updateTelephone(this.formulario.value).subscribe(
      success => {
        this.location.back();
      },
      error => console.error(error)
    );
  }

  onSubmit() {
    if (this.formulario.value.id) {
      this.updateTelephone();
    } else {
      this.createTelephone()
    }
  }

  onBackPage() {
    this.location.back();
  }

  onReset() {
    this.formulario.reset();
  }

}
