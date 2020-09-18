import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() public title = '';
  @Input() opened: boolean = false;
  @Output() onClose: EventEmitter<string> = new EventEmitter<string>()

  public close() {
    this.opened = false;
    this.onClose.emit();
  }
}
