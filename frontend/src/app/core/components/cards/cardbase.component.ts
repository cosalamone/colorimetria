import { Component, Input } from '@angular/core';
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
}
