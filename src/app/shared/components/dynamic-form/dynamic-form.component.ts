import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from '../../../core/classes/question-base';
import {QuestionControlService} from '../../../core/services/question-control.service';
import {BuildQuestions} from '../../../core/services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() submitClass = '';
  @Input() config: Array<any>;
  questions: QuestionBase<any>[] = [];
  @Output() submitCallBack = new EventEmitter();
  form: FormGroup;

  constructor(private qcs: QuestionControlService, private buildQuestions: BuildQuestions) {
  }

  ngOnInit() {
    this.questions = this.buildQuestions.build(this.config);
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {

    const data = JSON.stringify(this.form.value);
    this.submitCallBack.emit(data);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
