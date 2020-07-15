import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[defColOnEvent]'
})

export class DefaultColorOnEventDirective {
    constructor(private elRef: ElementRef) {
    }

    @HostListener('mouseover') onMoueOver() {
        this.changeColor('#B2D732');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeColor('');
    }

    private changeColor(color: string) {
        this.elRef.nativeElement.style.backgroundColor = color;
    }
}


