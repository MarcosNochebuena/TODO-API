import { Request, Response, NextFunction, RequestHandler } from "express";
import { TaskService } from "../services/task.service";

export const getTasks: RequestHandler = async (req, res, next) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las tareas" });
    }
};

export const getTaskById: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await TaskService.getTaskById(Number(id));
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la tarea" });
    }
};

export const createTask: RequestHandler = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const task = await TaskService.createTask({ title, description });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la tarea" });
    }
};

export const updateTask: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const task = await TaskService.updateTask(Number(id), { title, description });
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la tarea" });
    }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        await TaskService.deleteTask(Number(id));
        res.status(200).json({ message: "Tarea eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la tarea" });
    }
};
