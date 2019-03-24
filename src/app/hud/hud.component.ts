import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'g[hud]',
  templateUrl: './hud.component.svg',
  styleUrls: ['./hud.component.scss']
})
export class HudComponent implements OnInit {
  message = 'Hello world from a component!';

  constructor() { }

  ngOnInit() {
  }

}
