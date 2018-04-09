import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Verb } from '../shared/verb';

@Component({
  selector: 'app-verb-card',
  templateUrl: './verb-card.component.html',
  styleUrls: ['./verb-card.component.css']
})
export class VerbCardComponent implements OnChanges {

  @Input('verb') verb: Verb;
  @Input('mode') mode:boolean = true;

  @Output('onTrueInput') onTrueInput = new EventEmitter<boolean>();

  checkVerb: Verb = Verb.empty();

  checkResult = this.enptyEhcekResult();

  @ViewChild('infinitive')  infinitive: ElementRef;
  @ViewChild('simple')  simpleInput: ElementRef;
  @ViewChild('participle')  participleInput: ElementRef;

  constructor() { }

  onInfinitiveInput() {
    this.checkResult.infinitive = this.checkVerb.infinitive === this.verb.infinitive;
    this.checkFullInput();
    if (this.checkResult.infinitive && !this.checkResult.simple) {
      this.focusElement(this.simpleInput);
    }
  }

  onSimpleInput() {
    this.checkResult.simple = this.checkVerb.simple === this.verb.simple;
    this.checkFullInput();
    if (this.checkResult.simple && !this.checkResult.participate) {
      this.focusElement(this.participleInput);
    }
  }

  onParticipleInput() {
    this.checkResult.participate = this.checkVerb.participate === this.verb.participate; 
    this.checkFullInput();
  }

  checkFullInput() {
    if (this.checkResult.participate && this.checkResult.simple && this.checkResult.infinitive) {
      this.onTrueInput.emit(true);
    }
  }

  clearForm() {
    this.checkVerb = Verb.empty();
    this.checkResult = this.enptyEhcekResult();
  }

  enptyEhcekResult() {
    return {
      infinitive: false,
      simple: false,
      participate: false
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clearForm();
    this.focusElement(this.infinitive);
  }

  focusElement(element: ElementRef) {
      element.nativeElement.focus();
  }

}
