import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: false,
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {

  @Input() description = '';
  @Input() selected = false;
  @Output() click = new EventEmitter<void>();


  public onClick() {
    this.click.emit();
  }

}
