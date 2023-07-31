import { Component, OnInit } from '@angular/core';
import { NgbPopoverModule, NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  details!: string
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    this.details = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros   Praesent commodo cursus magna, vel scelerisque nisl consectetur eVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
  }


}
