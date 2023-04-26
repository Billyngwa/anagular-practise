import { TaskDifficulty, TaskLevel, TaskStatus } from "../constants/constants.enum";

export interface Itask{
    name: string;
    description: string;
    startDate: Date | string;
    dueDate: Date | string;
    status: TaskStatus,
    difficulty: TaskDifficulty,
    level: TaskLevel,
    userId: string;
    image?: string;
    resources?: object | [],
    id?: string;
}