import { TaskDifficulty, TaskLevel, TaskStatus } from "../constants/constants.enum";

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