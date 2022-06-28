import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  hidden : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.hidden = !this.hidden;
  }

  get_hidden(){
    return this.hidden;
  }
}
