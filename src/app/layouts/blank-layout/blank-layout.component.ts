import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '@animations/fade-in.animation';
@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
  standalone: false,
  animations: [fadeIn],
})
export class BlankLayoutComponent {
  isHome = signal<boolean>(false);
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.isHome.set(data.isHome);
    });
  }
}
