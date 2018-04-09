import { Component, OnInit } from '@angular/core';
import {Verb} from '../shared/verb';
import {VerbService} from '../shared-services/verb-service';

@Component({
  selector: 'app-all-table',
  templateUrl: './all-table.component.html',
  styleUrls: ['./all-table.component.css']
})
export class AllTableComponent implements OnInit {

  verbs: Verb[] = [];


  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.verbService.getAllVerbs().subscribe((verbs: Verb[]) => {
      this.verbs = verbs;
    });
  }
}
