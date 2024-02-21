import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
