import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseModel } from '../../models/card-base.model';

@Component({
  selector: 'app-cardbase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardbase.component.html',
  styleUrls: ['./cardbase.component.css']
})
export class CardBaseComponent {
  @Input() data!: CardBaseModel;
  @Output() cardClick = new EventEmitter<void>();
}
