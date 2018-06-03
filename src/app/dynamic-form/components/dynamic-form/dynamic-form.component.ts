import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfigModel } from '../../models/config.model';
import { GroupCreaterService } from '../../../services/group-creater.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
    form: FormGroup;
    config: ConfigModel = {
        questions: [
            {
                name: "question01",
                content: "你的血型是什么？",
                type: "select",
                answerList: [
                    { id: "1", value: "A型" },
                    { id: "2", value: "B型" },
                    { id: "3", value: "AB型" },
                    { id: "4", value: "O型" }
                ]
            },
            {
                name: "question02",
                content: "你的性别是什么？",
                type: "radio",
                answerList: [
                    { id: "1", value: "男" },
                    { id: "2", value: "女" }
                ]
            },
            {
                name: "question03",
                content: "你的生日是什么？",
                type: "yearmonth"
            },
            {
                name: "question04",
                content: "你的偶像是？",
                type: "mutli-select",
                answerList: [
                    { id: "1", value: "刘德华" },
                    { id: "2", value: "张学友" },
                    { id: "3", value: "郭富城" },
                    { id: "4", value: "黎明" }
                ]
            }
        ],
        sugaryHospInfo: {
            hasHosp: true,
            hasSugary: true,
            sugaryHospInfos: [
                {
                    sugaryId: "1",
                    sugaryYear: "2018",
                    sugaryMonth: "1",
                    hospYear: "2017",
                    hospMonth: "2",
                    hospPeriod: "1"
                }
            ]
        }
    };
    constructor(
        private groupCreater: GroupCreaterService
    ) { }

    ngOnInit() {
        this.form = this.groupCreater.createGroup(this.config);
        // this.createGroup();
    }

    // createGroup() {
    //     let questionGrp = this.fb.group({});
    //     for (let question of this.config.questions) {
    //         if (question.type == "yearmonth") {
    //             let yearmonthGroup: FormGroup = this.fb.group({
    //                 year: this.fb.control(""),
    //                 month: this.fb.control("")
    //             });
    //             questionGrp.addControl(question.name, yearmonthGroup);
    //         } else {
    //             questionGrp.addControl(question.name, this.fb.control(""));
    //         }
    //     }
    //     this.form.addControl("questions", questionGrp);
    //     let arr = this.fb.array([]);
    //     if (this.config.sugaryHospInfo.sugaryHospInfos.length > 0) {
    //         for (let sugaryHospInfo of this.config.sugaryHospInfo.sugaryHospInfos) {
    //             let sugaryHospInfoGroup = this.fb.group({});
    //             if (this.config.sugaryHospInfo.hasSugary) {
    //                 sugaryHospInfoGroup.addControl("sugaryYear", this.fb.control(sugaryHospInfo.sugaryYear));
    //                 sugaryHospInfoGroup.addControl("sugaryMonth", this.fb.control(sugaryHospInfo.sugaryMonth));
    //                 sugaryHospInfoGroup.addControl("sugaryId", this.fb.control(sugaryHospInfo.sugaryId));
    //             }

    //             if (this.config.sugaryHospInfo.hasHosp) {
    //                 sugaryHospInfoGroup.addControl("hospYear", this.fb.control(sugaryHospInfo.hospYear));
    //                 sugaryHospInfoGroup.addControl("hospMonth", this.fb.control(sugaryHospInfo.hospMonth));
    //                 sugaryHospInfoGroup.addControl("hospPeriod", this.fb.control(sugaryHospInfo.hospPeriod));
    //             }
    //             arr.push(sugaryHospInfoGroup);
    //         }
    //     } else {
    //         let sugaryHospInfoGroup = this.fb.group({});
    //         if (this.config.sugaryHospInfo.hasSugary) {
    //             sugaryHospInfoGroup.addControl("sugaryYear", this.fb.control(""));
    //             sugaryHospInfoGroup.addControl("sugaryMonth", this.fb.control(""));
    //             sugaryHospInfoGroup.addControl("sugaryId", this.fb.control(""));
    //         }

    //         if (this.config.sugaryHospInfo.hasHosp) {
    //             sugaryHospInfoGroup.addControl("hospYear", this.fb.control(""));
    //             sugaryHospInfoGroup.addControl("hospMonth", this.fb.control(""));
    //             sugaryHospInfoGroup.addControl("hospPeriod", this.fb.control(""));
    //         }
    //         arr.push(sugaryHospInfoGroup);
    //     }

    //     this.form.addControl("sugaryHospInfos", arr);
    // }


}
