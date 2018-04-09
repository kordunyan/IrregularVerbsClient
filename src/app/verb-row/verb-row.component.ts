import { Component, OnInit, Input } from '@angular/core';
import { Verb } from '../shared/verb';

@Component({
  selector: '[app-verb-row]',
  templateUrl: './verb-row.component.html',
  styleUrls: ['./verb-row.component.css']
})
export class VerbRowComponent implements OnInit {

  @Input('verb') verb: Verb;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl(verb: Verb) {
    return verb.image ? `url(http://localhost:8080/images/${verb.image}` : '';
  }

}
