import { SugaryHospModel } from "./sugary-hosp.model";

export interface SugaryHospInfoModel{
    hasSugary: boolean;
    hasHosp: boolean;
    sugaryHospInfos?: SugaryHospModel[];
}