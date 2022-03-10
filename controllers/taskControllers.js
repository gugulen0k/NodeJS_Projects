import { v4 as uuidv4 } from 'uuid';
import Task from "../models/Task.js";

export const getAllTasks = async (req, res, next) => {
    try {
        const [tasks, _] = await Task.findAll();

        res.status(200).json({ tasks })
    } catch(error) {
        next(error.sqlMessage)
    }
}

export const createNewTask = async (req, res, next) => {
    try {
        const generatedId = uuidv4()
        const { name, completed } = req.body

        let task = new Task( generatedId, name, completed )
        const [createdTask, _] = await task.addNewTask();

        res.status(201).json({ task: createdTask[0] })
    } catch (error) {
        next(error.sqlMessage)
    }
}

export const getTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const [task, _] = await Task.findById(id)

        if (task[0].length === 0) {
            res.status(200).json({ message: `There is no task by id '${id}'` })
        } else {
            res.status(200).json({ task: task[0][0] })
        }
    } catch(error) {
        next(error.sqlMessage)
    }
}

export const updateTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const { name, completed } = req.query
        const [task, _] = await Task.updateById(id, name, completed)

        if (task[0].length === 0) {
            res.status(200).json({ message: `There is no task by id '${id}'` })
        } else {
            res.status(200).json({ task: task[0][0] })
        }
    } catch(error) {
        next(error.sqlMessage)
    }
}

export const deleteTaskById = async (req, res, next) => {
    try {
        const id = req.params.id
        const [task, _] = await Task.deleteById(id)

        res.status(200).json({ id, message: "Task deleted successfully" })
    } catch(error) {
        next(error.sqlMessage)
    }
}