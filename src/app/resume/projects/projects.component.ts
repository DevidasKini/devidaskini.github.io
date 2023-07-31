import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[
    NgbActiveModal
  ]
})
export class ProjectsComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    size: 'lg', backdrop: 'static'
  }
  testForm!: FormGroup;
  validationBegins: boolean = false;
  showForm = false;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.testForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    })
  }

  details(){
    this.showForm = true;
  }

  get formControls(){
    return this.testForm.controls;
  }

  formValidation(){
    console.log(this.testForm);
    return this.testForm.valid;
  }

  validateForm(){
    this.validationBegins = true;
    const isValid = this.formValidation();
    if(isValid){
      return
    }
  }

}
