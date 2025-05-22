import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MenuService } from '@app/services/menu.service';
import { Observable } from 'rxjs';
import { MegaMenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class MenuResolver implements Resolve<MegaMenuItem[]> {
  constructor(private menuService: MenuService) {}

  resolve(): Observable<MegaMenuItem[]> {
    return this.menuService.fetchAll();
  }
}
