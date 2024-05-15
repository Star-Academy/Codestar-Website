import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent{
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(service: IntersectionObserverService) {
        afterRender(() =>{
            service.initObserver(this.section.nativeElement, '.watermark, .line, p, .button');
        })
    }
}
