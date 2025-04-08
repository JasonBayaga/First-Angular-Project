import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'public-index',
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class PublicComponent {


}
