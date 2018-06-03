import { Injectable } from '@angular/core';
import { ConfigModel } from '../dynamic-form/models/config.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Injectable()
export class GroupCreaterService {

    constructor(
        private fb: FormBuilder
    ) { }

    createGroup(config: ConfigModel): FormGroup {
        let form = this.fb.group({});
        let questionGrp = this.fb.group({});
        for (let question of config.questions) {
            if (question.type == "yearmonth") {
                let yearmonthGroup: FormGroup = this.fb.group({
                    year: this.fb.control(""),
                    month: this.fb.control("")
                });
                questionGrp.addControl(question.name, yearmonthGroup);
            } else if (question.type == "mutli-select"){
                let arr: FormArray = this.fb.array([]);
                arr.push(this.fb.control(""));
                questionGrp.addControl(question.name, arr);
            } else {
                questionGrp.addControl(question.name, this.fb.control(""));
            }
        }
        form.addControl("questions", questionGrp);
        let arr = this.fb.array([]);
        if (config.sugaryHospInfo.sugaryHospInfos.length > 0) {
            for (let sugaryHospInfo of config.sugaryHospInfo.sugaryHospInfos) {
                let sugaryHospInfoGroup = this.fb.group({});
                if (config.sugaryHospInfo.hasSugary) {
                    sugaryHospInfoGroup.addControl("sugaryYear", this.fb.control(sugaryHospInfo.sugaryYear));
                    sugaryHospInfoGroup.addControl("sugaryMonth", this.fb.control(sugaryHospInfo.sugaryMonth));
                    sugaryHospInfoGroup.addControl("sugaryId", this.fb.control(sugaryHospInfo.sugaryId));
                }

                if (config.sugaryHospInfo.hasHosp) {
                    sugaryHospInfoGroup.addControl("hospYear", this.fb.control(sugaryHospInfo.hospYear));
                    sugaryHospInfoGroup.addControl("hospMonth", this.fb.control(sugaryHospInfo.hospMonth));
                    sugaryHospInfoGroup.addControl("hospPeriod", this.fb.control(sugaryHospInfo.hospPeriod));
                }
                arr.push(sugaryHospInfoGroup);
            }
        } else {
            let sugaryHospInfoGroup = this.fb.group({});
            if (config.sugaryHospInfo.hasSugary) {
                sugaryHospInfoGroup.addControl("sugaryYear", this.fb.control(""));
                sugaryHospInfoGroup.addControl("sugaryMonth", this.fb.control(""));
                sugaryHospInfoGroup.addControl("sugaryId", this.fb.control(""));
            }

            if (config.sugaryHospInfo.hasHosp) {
                sugaryHospInfoGroup.addControl("hospYear", this.fb.control(""));
                sugaryHospInfoGroup.addControl("hospMonth", this.fb.control(""));
                sugaryHospInfoGroup.addControl("hospPeriod", this.fb.control(""));
            }
            arr.push(sugaryHospInfoGroup);
        }

        form.addControl("sugaryHospInfos", arr);
        
        return form;
    }

}
