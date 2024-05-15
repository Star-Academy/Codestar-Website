import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @ViewChild('header') private header!: ElementRef<HTMLElement>;

    public constructor(service: IntersectionObserverService) {
        afterRender(()=>{
            service.initObserver(this.header.nativeElement, 'a');
        })
    }

}
