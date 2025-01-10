import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menus = [
    { component: 'intro', label: 'Introduction', wip: false },
    { component: 'button', label: 'Button', wip: false },
    { component: 'card', label: 'Card', wip: true },
  ];
}
