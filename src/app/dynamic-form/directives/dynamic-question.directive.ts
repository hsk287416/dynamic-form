import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { QuestionModel } from '../models/question.model';
import { FormGroup } from '@angular/forms';
import { RadioQuestionComponent } from '../components/radio-question/radio-question.component';
import { SelectQuestionComponent } from '../components/select-question/select-question.component';
import { YearmonthQuestionComponent } from '../components/yearmonth-question/yearmonth-question.component';
import { MutliSelectQuestionComponent } from '../components/mutli-select-question/mutli-select-question.component';

@Directive({
    selector: '[dynamicQuestion]'
})
export class DynamicQuestionDirective implements OnInit {
    @Input("question") question: QuestionModel;
    @Input("group") group: FormGroup;
    componentMap = {
        "radio": RadioQuestionComponent,
        "select": SelectQuestionComponent,
        "yearmonth": YearmonthQuestionComponent,
        "mutli-select": MutliSelectQuestionComponent
    };
    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit(): void {
        let factory = this.resolver.resolveComponentFactory(this.componentMap[this.question.type]);
        let comp: any = this.container.createComponent(factory);
        comp.instance.question = this.question;
        comp.instance.group = this.group;
    }
}
