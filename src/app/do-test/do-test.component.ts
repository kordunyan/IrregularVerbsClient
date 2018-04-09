import { Component, OnInit } from '@angular/core';
import { VerbService } from '../shared-services/verb-service';
import { Verb } from '../shared/verb';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})
export class DoTestComponent implements OnInit {

  allVerbs: Verb[] = [];
  isLoaded = false;
  currentIndex = 0;
  verb: Verb;
  testReady = false;

  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.restart();
  }

  goToNext() {
    if (this.currentIndex < this.allVerbs.length-1) {
        this.verb = this.allVerbs[++this.currentIndex];
    } else {
      this.currentIndex++;
      this.testReady = true;
    }
  }

  restart() {
    this.currentIndex = 0;
    this.isLoaded = false;
    this.testReady = false;
    this.verbService.getAllVerbsRandOrder().subscribe((verbs: Verb[]) => {
      this.allVerbs = verbs;
      this.isLoaded = true;
      this.verb = this.allVerbs[0];
    });
  }

}
