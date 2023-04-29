import { TaskDifficulty, TaskLevel, TaskStatus } from "../constants/constants.enum";
//this is the task type and it is an interface. here i SAY A task should have the following :
// a name, description,
export interface Itask{
    taskName: string;
    description: string;
    startDate: Date | string;
    dueDate: Date | string;
    status: string;
    difficulty: string;
    level: string;
    userId: string;
    image?: string;
    resources?: object | [],
    id?: string;
}