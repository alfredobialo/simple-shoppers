import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-if-structural-directive',
  templateUrl: 'ngIf-structural-directive.html'
})

export class NgIfStructuralDirectiveComponent implements OnInit {
  show = true;
  btnLabel ="Hide";
  constructor() {
  }

  @Input() title: string = "Welcome";

  ngOnInit() {
  }

  hideOrShow() { //lbl: HTMLParagraphElement
    /*if(lbl.style.display !== 'none'){
      lbl.style.display ='none'; // hide
    }
    else{
      lbl.style.display ='block';
    }*/
    /*if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }*/
    this.show = !this.show;
    this.btnLabel = this.show ? "Hide" : "Show";
  }
}
