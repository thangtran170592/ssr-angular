import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '@animations/fade-in.animation';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: false,
  animations: [fadeIn],
})
export class MainLayoutComponent implements OnInit {
  isHome = signal<boolean>(false);
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);
    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.isHome.set(data.isHome);
    });
  }
}
