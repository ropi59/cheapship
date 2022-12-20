import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onNous(){
    this.router.navigateByUrl("qui-sommes-nous");
  }

  onConditions(){
    this.router.navigateByUrl("conditions");
  }

  onPolitiques(){
    this.router.navigateByUrl("politiques");
  }

  onCookies(){
    this.router.navigateByUrl("cookies");
  }

  onPresse(){
    this.router.navigateByUrl("presse");
  }

  onEngagements(){
    this.router.navigateByUrl("engagements");
  }

  onAppli(){
    this.router.navigateByUrl("applications");
  }

  onRadar(){
    this.router.navigateByUrl("radar-vol");
  }

  onCompagnies(){
    this.router.navigateByUrl("compagnies");
  }

  onAeroport(){
    this.router.navigateByUrl("aeroports");
  }

  onVoyages(){
    this.router.navigateByUrl("infos-voyages")
  }

 

}
