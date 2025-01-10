import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() documentation = false;
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() type: 'filled' | 'stroked' | 'text' = 'filled';
  @Input() label = 'Primary';
}
