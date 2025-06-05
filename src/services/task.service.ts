import Task from "../models/Task";
import { NotFoundError } from "../utils/errors";

export class TaskService {
    private static async findTaskOrFail(id: number) {
        const task = await Task.findByPk(id);
        if (!task) throw new NotFoundError("Task not found");
        return task;
    }

    static async getAllTasks() {
        return await Task.findAll();
    }

    static async createTask(data: { title: string; description?: string }) {
        return await Task.create(data);
    }

    static async updateTask(id: number, data: { title?: string; description?: string }) {
        const task = await this.findTaskOrFail(id);
        await task.update(data);
        return task;
    }

    static async deleteTask(id: number) {
        const task = await this.findTaskOrFail(id);
        await task.destroy();
    }

    static async getTaskById(id: number) {
        return await this.findTaskOrFail(id);
    }
}
