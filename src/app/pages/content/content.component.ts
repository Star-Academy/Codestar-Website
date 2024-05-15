import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
    @ViewChild('frontendSection') private frontendSection!: ElementRef<HTMLElement>;
    @ViewChild('softwareSection') private softwareSection!: ElementRef<HTMLElement>;

    public constructor(service: IntersectionObserverService) {
        afterRender(() => {
            const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
            service.initObserver(this.frontendSection.nativeElement, 'header, .icon, h3, p', options);
            service.initObserver(this.softwareSection.nativeElement, 'header, .icon, h3, p', options);
        })
    }
}
