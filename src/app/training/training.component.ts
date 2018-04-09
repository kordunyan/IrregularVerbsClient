import { Component, OnInit } from '@angular/core';
import { Verb } from '../shared/verb';
import { VerbService } from '../shared-services/verb-service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  loaded = false;
  allVerbs: Verb[] = [];
  verb: Verb;
  currentVerbIndex = 0;

  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.verbService.getAllVerbs().subscribe((verbs: Verb[]) => {
      this.allVerbs = verbs;
      this.verb = this.allVerbs[0];
      this.loaded = true;
    });
  }

  showNext() {
    this.currentVerbIndex++;
    this.verb = this.allVerbs[this.currentVerbIndex];
  }

  showLast() {
    this.currentVerbIndex--;
    this.verb = this.allVerbs[this.currentVerbIndex];
  }

}
