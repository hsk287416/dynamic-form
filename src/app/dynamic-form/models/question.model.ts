import { AnswerModel } from "./answer.model";

export interface QuestionModel {
    name: string;
    content: string;
    type: string;
    answerList?: AnswerModel[];
}