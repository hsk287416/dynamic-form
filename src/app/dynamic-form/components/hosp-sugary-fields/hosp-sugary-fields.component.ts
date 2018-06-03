import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SugaryInfoModel } from '../../models/sugary-info.model';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SugaryHospModel } from '../../models/sugary-hosp.model';
import { SugaryHospInfoModel } from '../../models/sugary-hosp-info.model';
import * as $ from 'jquery';

@Component({
    selector: 'hosp-sugary-fields',
    templateUrl: './hosp-sugary-fields.component.html',
    styleUrls: ['./hosp-sugary-fields.component.scss']
})
export class HospSugaryFieldsComponent implements OnInit {
    @Input() sugaryHospInfo: SugaryHospInfoModel;
    @Input() group: FormGroup;
    sugaryHospGroupArr: FormArray;
    rowTitle: string;
    @ViewChild("addBtn") addBtn: ElementRef;
    @ViewChild("removeBtn") removeBtn: ElementRef;

    constructor(
        private fb: FormBuilder,
        private render: Renderer2
    ) {

    }

    ngOnInit() {
        this.sugaryHospGroupArr = this.group.get("sugaryHospInfos") as FormArray;
        this.rowTitle = this.sugaryHospInfo.hasSugary ? "手术" : "住院";
        // this.sugaryHospGroupArr.valueChanges.subscribe(items => {
        //     if (items.length == 1) {

        //     }
        // })
    }

    addRow(index) {
        let sugaryHospInfoGroup = this.fb.group({});
        if (this.sugaryHospInfo.hasSugary) {
            sugaryHospInfoGroup.addControl("sugaryYear", this.fb.control(""));
            sugaryHospInfoGroup.addControl("sugaryMonth", this.fb.control(""));
            sugaryHospInfoGroup.addControl("sugaryId", this.fb.control(""));
        }

        if (this.sugaryHospInfo.hasHosp) {
            sugaryHospInfoGroup.addControl("hospYear", this.fb.control(""));
            sugaryHospInfoGroup.addControl("hospMonth", this.fb.control(""));
            sugaryHospInfoGroup.addControl("hospPeriod", this.fb.control(""));
        }
        this.sugaryHospGroupArr.push(sugaryHospInfoGroup);
        $($(".addBtn")[index]).css({"display": "none"});
        $($(".removeBtn")[index]).css({"display": "block"});
    }

    removeRow(index) {
        this.sugaryHospGroupArr.removeAt(index);
    }
}

