import { Component } from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router'

@Component ({
    selector: 'dashboard-app',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent{
  private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
            },
            {
                label: 'Edit',
            }
        ];
    }

    constructor(private router: Router){}
     logout(){
               this.router.navigate(['']);
     }
}