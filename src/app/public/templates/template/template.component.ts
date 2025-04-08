import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'public-template',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class PublicTemplateComponent {


}
