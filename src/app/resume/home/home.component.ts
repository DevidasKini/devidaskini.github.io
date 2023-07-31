import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Company } from 'src/app-constant';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joiningDate = moment("2020-09-14", "YYYY-MM-DD");
  currentDate = moment();
  years!: any;
  company: any;
  exp: any;
  expYears!: any;

  constructor(private dataShare: DatashareService) { }

  ngOnInit(): void {
    moment.locale("en");
    let duration = moment.duration(moment().diff(this.joiningDate));
    this.years = Math.floor(duration.asYears());
    let months = Math.floor(duration.asMonths()) % 12;
    this.exp = this.years + " years " + months + " months";
    this.expYears =  this.years + "." + months + "";

    this.company = Company;

    this.dataShare.sendUserData(this.expYears);
  }

}
