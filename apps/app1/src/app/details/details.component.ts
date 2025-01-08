import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent, CardComponent } from '@nx-ui-lib-tests/components'

@Component({
  selector: 'app-details',
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  currentRoute = signal<string>('intro');

  constructor(private route: ActivatedRoute) {
    this.handleCurrentRoute();
  }

  private handleCurrentRoute() {
    this.route.params.subscribe(params => {
      if (params['component'])
        this.currentRoute.set(params['component']);
    });
  }
}
