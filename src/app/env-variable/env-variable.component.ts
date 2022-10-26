import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-env-variable',
  templateUrl: './env-variable.component.html',
  styleUrls: ['./env-variable.component.css']
})
export class EnvVariableComponent implements OnInit {

  GlobalVariablefetched = environment.GlobalVariable

  constructor() { }

  ngOnInit(): void {
  }

}
