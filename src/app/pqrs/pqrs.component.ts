import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PqrsService } from './pqrs.service';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {
  helper = new JwtHelperService();
  pqrsForm: FormGroup;


  constructor(
    private pqrsService: PqrsService,
    private formBuilder: FormBuilder,
    private router: Router,
    //private toastr: ToastrService
  ) {
    this.pqrsForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.maxLength(80)]],
      email: ["", [Validators.required, Validators.maxLength(80), Validators.email]],
      asunto: ["", [Validators.required, Validators.maxLength(80)]],
      peticion: ["", [Validators.required, Validators.maxLength(256)]]
    })
    
  }
  
  ngOnInit() {
    
  }
  registrarPQRS(){

  }

}
