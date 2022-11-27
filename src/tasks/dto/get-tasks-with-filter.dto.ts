import { TaskStatus } from './../task.model';

export class GetTasksWithFilter {
  status?: TaskStatus;
  search?: string;
}
