import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Router, RouterModule } from '@angular/router';
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
  items?: MegaMenuItem[];
  search?: string;
  currentUrl: string = '';
  constructor(public platformService: PlatformService, private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      this.items = this.buildMenu();
    });
  }
  ngOnInit() {
    this.search = 'Tìm kiếm';
  }

  private buildMenu(): MegaMenuItem[] {
    return [
      {
        id: '1',
        label: 'Trang Chủ',
        routerLink: '/trang-chu',
        icon: 'pi pi-home',
        root: true,
        styleClass: this.currentUrl === '/trang-chu' ? 'active' : '',
      },
      {
        id: '3',
        label: 'Sản Phẩm',
        routerLink: '/san-pham',
        icon: 'pi pi-tags',
        root: true,
        styleClass: this.currentUrl === '/san-pham' ? 'active' : '',
      },
      {
        id: '5',
        label: 'Tư Vấn Thiết Kế',
        routerLink: '/tu-van-thiet-ke',
        icon: 'pi pi-comments',
        root: true,
        styleClass: this.currentUrl === '/tu-van-thiet-ke' ? 'active' : '',
      },
      {
        id: '6',
        label: 'Đào Tạo',
        routerLink: '/dao-tao',
        icon: 'pi pi-book',
        root: true,
        styleClass: this.currentUrl === '/dao-tao' ? 'active' : '',
      },
      {
        id: '7',
        label: 'Dịch Vụ',
        routerLink: '/dich-vu',
        icon: 'pi pi-wrench',
        root: true,
        styleClass: this.currentUrl === '/dich-vu' ? 'active' : '',
      },
      /*{
        id: '8',
        label: 'Tin Tức',
        url: '/tin-tuc',
        icon: 'pi pi-megaphone',
      },
      */
      {
        id: '2',
        label: 'Giới Thiệu',
        routerLink: '/gioi-thieu',
        icon: 'pi pi-info-circle',
        root: true,
        styleClass: this.currentUrl === '/gioi-thieu' ? 'active' : '',
      },
      {
        id: '9',
        label: 'Liên Hệ',
        routerLink: '/lien-he',
        icon: 'pi pi-phone',
        root: true,
        styleClass: this.currentUrl === '/lien-he' ? 'active' : '',
      },
      /*{
        id: '10',
        label: 'Dự Án',
        routerLink: '/du-an',
        icon: 'pi pi-user-plus',
        root: true,
        styleClass: this.currentUrl === '/du-an' ? 'active' : '',
      },
      
      {
        id: '10',
        label: 'Tuyển Dụng',
        url: '/tuyen-dung',
        icon: 'pi pi-user-plus',
      },
      */
    ];
  }
}
