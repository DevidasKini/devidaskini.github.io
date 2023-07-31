import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @ViewChild('mySidebar') mySidebar!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.mySidebar.nativeElement.style.width = "250px";
  }

  closeNav(){
    this.mySidebar.nativeElement.style.width = "0px";
  }

}
