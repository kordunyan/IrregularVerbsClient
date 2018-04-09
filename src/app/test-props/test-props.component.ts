import { Component, OnInit } from '@angular/core';
import { VerbService } from '../shared-services/verb-service';
import { Verb } from '../shared/verb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-props',
  templateUrl: './test-props.component.html',
  styleUrls: ['./test-props.component.css']
})
export class TestPropsComponent implements OnInit {
 
  allVerbs: { isSelect: boolean, verb: Verb}[] = [];
  selectDelelcetAll: boolean = false;

  constructor(
    private verbService: VerbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verbService.getAllVerbs().subscribe((verbs: Verb[]) => {
      this.allVerbs = verbs.map(verb => {
        return { isSelect: false, verb };
      });
    });
  }
  
  start() {
    let verbs = this.allVerbs
                          .filter(verbSelect => verbSelect.isSelect)
                          .map(verbSelect => verbSelect.verb);
    if (verbs.length > 0) {
      this.verbService.setVerbs(verbs);
      this.router.navigate(['/optionTest'])
    }
  }

  selectDeselect() {
    this.allVerbs.forEach(verbSelect => verbSelect.isSelect = this.selectDelelcetAll);
  }

}
