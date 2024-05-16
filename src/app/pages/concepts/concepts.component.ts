import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-concepts',
    templateUrl: './concepts.component.html',
    styleUrls: ['./concepts.component.scss'],
})
export class ConceptsComponent {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(service: IntersectionObserverService) {
        afterRender(() => {
            const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
            service.initObserver(this.section.nativeElement, 'header, h3, p', options);    
        })
    }
}
