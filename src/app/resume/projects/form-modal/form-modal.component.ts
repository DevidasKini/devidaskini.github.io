import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
  providers:[
    NgbActiveModal
  ]
})
export class FormModalComponent implements OnInit {

  testForm!: FormGroup;
  validationBegins: boolean = false;
  public activeModal!: NgbActiveModal;

  constructor( private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.testForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  close(){
    console.log("closing")
    this.activeModal.dismiss();
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
