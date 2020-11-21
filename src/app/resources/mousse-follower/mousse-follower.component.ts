import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousse-follower',
  templateUrl: './mousse-follower.component.html',
  styleUrls: ['./mousse-follower.component.scss']
})
export class MousseFollowerComponent implements OnInit {
  @Input() posX: string;
  @Input() posY: string;

  constructor() { }

  ngOnInit(): void {
  }

  getCursorPosition(): Object{
    document.onmousemove = (event) => {
      this.posX = event.clientX+"px";
      this.posY = event.clientY+"px";
      console.log("coordonnée X : " + this.posX);
      console.log("coordonnée Y : " + this.posY);
    };
    return {top: this.posY, left: this.posX};
  }

}
