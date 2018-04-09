import { Component, OnInit } from '@angular/core';
import { VerbService } from '../shared-services/verb-service';
import { Verb } from '../shared/verb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-option-test',
  templateUrl: './do-option-test.component.html',
  styleUrls: ['./do-option-test.component.css']
})
export class DoOptionTestComponent implements OnInit {

  allVerbs: Verb[] = [];
  isLoaded = true;
  currentIndex = 0;
  verb: Verb;
  testReady = false;

  constructor(
    private verbService: VerbService,
    private router: Router) { }

  ngOnInit() {
    this.allVerbs = this.verbService.getVerbs();
    if (!this.allVerbs.length) {
      this.router.navigate(['/test-settings']);
    }
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
    this.testReady = false;
    this.shufflArray();
    this.verb = this.allVerbs[0];
  }

  shufflArray() {
    this.allVerbs =  this.allVerbs
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
  }

}
