import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onHome(): void{
    this.router.navigateByUrl("");
  }

  onFavoris(): void{
    this.router.navigateByUrl("favoris");
  }

  onSubscribe(): void{
    this.router.navigateByUrl("subscribe");
  }

  onLogin(): void{
    this.router.navigateByUrl("login");
  }

}
