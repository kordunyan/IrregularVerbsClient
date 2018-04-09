import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AllTableComponent} from '../all-table/all-table.component';
import {FormAddComponent} from '../form-add/form-add.component';
import { TrainingComponent } from '../training/training.component';
import { DoTestComponent } from '../do-test/do-test.component';
import { TestPropsComponent } from '../test-props/test-props.component';
import { DoOptionTestComponent } from '../do-option-test/do-option-test.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllTableComponent
  },
  {
    path: 'add',
    component: FormAddComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'test',
    component: DoTestComponent
  },
  {
    path: 'test-settings',
    component: TestPropsComponent
  },
  {
    path: 'optionTest',
    component: DoOptionTestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
