import { Component } from '@angular/core';
import { LoginComponent} from './login/login.component';
import {ButtonModule} from 'primeng/primeng';
import { DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
