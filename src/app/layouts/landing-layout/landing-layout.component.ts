import { Component } from '@angular/core';
import { fadeIn } from '@animations/fade-in.animation';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss',
  standalone: false,
  animations: [fadeIn],
})
export class LandingLayoutComponent {}
