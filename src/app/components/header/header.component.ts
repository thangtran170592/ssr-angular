import { Component, OnInit, ViewEncapsulation, signal } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { CommonModule } from '@angular/common';
import { MegaMenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PlatformService } from '@core/services/platform.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    ImageModule,
    RouterModule,
    MegaMenuModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    AvatarModule,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  items = signal<MegaMenuItem[]>([]);
  search = signal<string>('');
  currentUrl = signal<string>('');
  constructor(
    public platformService: PlatformService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.currentUrl.set(this.router.url);
    this.route.data.subscribe((data: any) => {
      this.items.set(data.menu);
    });
    this.search.set('Tìm kiếm');
  }
}
