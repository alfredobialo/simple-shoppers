import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-for-structural-directive',
  template: `<div class=" p-5 mb-4 shadow" [ngClass]="{'bg-danger': oddNum,'bg-light':oddNum === false}"
                  *ngFor="let item of [1,0,1],
                   let i = index;let oddNum = odd; ">
    <h3>{{i + 1}} NgFor Structural Directive </h3>
    <span *ngIf="oddNum" class="font-weight-bold">This Is Odd</span>
  </div>`
})

export class NgForStructuralDirectiveComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
