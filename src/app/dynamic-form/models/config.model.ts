import { QuestionModel } from "./question.model";
import { SugaryInfoModel } from "./sugary-info.model";
import { SugaryHospModel } from "./sugary-hosp.model";
import { SugaryHospInfoModel } from "./sugary-hosp-info.model";

export interface ConfigModel{
    questions?: QuestionModel[];
    sugaryHospInfo: SugaryHospInfoModel;
}