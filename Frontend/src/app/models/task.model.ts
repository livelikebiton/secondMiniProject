import { MemberModel } from './member.model';

export class TaskModel {
    public _id: string;
    public description: string;
    public taskDate: Date;
    public memberId: string;
    public member: MemberModel;
}