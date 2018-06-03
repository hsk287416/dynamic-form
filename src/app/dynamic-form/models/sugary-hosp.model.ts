import { SugaryInfoModel } from "./sugary-info.model";
import { HospInfoModel } from "./hosp-info.model";

export interface SugaryHospModel {
    sugaryYear?: string;
    sugaryMonth?: string;
    sugaryId?: string;
    hospYear?: string;
    hospMonth?: string;
    hospPeriod?: string;
}