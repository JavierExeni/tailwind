import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('banner', { read: ElementRef }) banner!: ElementRef;
  @ViewChild('bubble', { read: ElementRef }) bubble!: ElementRef;

  title = 'tailwind';

  observer: any;

  ngAfterViewInit(): void {
    this.observer.observe(this.banner.nativeElement);
  }

  ngOnInit(): void {
    this.intersectionObserver();
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.bubble.nativeElement.classList.add('bubble-expand');
          this.bubble.nativeElement.classList.remove('bubble-close');
        } else {
          this.bubble.nativeElement.classList.add('bubble-close');
          this.bubble.nativeElement.classList.remove('bubble-expand');
        }
      });
    });
  }
}
