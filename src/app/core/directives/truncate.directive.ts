import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTruncate]',
})
export class TruncateDirective implements OnChanges {
  @Input('appTruncate') maxLength: number = 100;
  @Input() fullText?: string;
  @Input() showEllipsis: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fullText && this.maxLength > 0) {
      const truncated =
        this.fullText.length > this.maxLength
          ? this.fullText.substring(0, this.maxLength) + '...'
          : this.fullText;

      this.renderer.setProperty(this.el.nativeElement, 'innerText', truncated);
    }
  }
}
