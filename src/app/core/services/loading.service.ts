import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSignal = signal<boolean>(false);

  get loading() {
    return this.loadingSignal();
  }

  setLoading(loading: boolean) {
    this.loadingSignal.set(loading);
  }
}
