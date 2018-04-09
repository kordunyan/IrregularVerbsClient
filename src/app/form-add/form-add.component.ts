import { Component, OnInit } from '@angular/core';
import {Verb} from '../shared/verb';
import {VerbService} from '../shared-services/verb-service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  model = Verb.empty();

  constructor(private verbService: VerbService) { }

  ngOnInit() {
  }

  newVerb() {
    this.verbService.addVerb(this.model).subscribe((verb: Verb) => {
      this.model = Verb.empty();
    });
  }
}
