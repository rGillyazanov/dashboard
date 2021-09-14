import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeWidth() {
    (document.querySelector('.sidebar') as HTMLElement).classList.toggle('active');
    (document.querySelector('.main') as HTMLElement).classList.toggle('active');
  }
}
