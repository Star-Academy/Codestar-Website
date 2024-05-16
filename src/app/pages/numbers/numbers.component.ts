import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(service: IntersectionObserverService) {
        afterRender(() => {
            const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
            service.initObserver(this.section.nativeElement, 'header, li', options);
        })
    }
}
