import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item;
  @Output() addCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
