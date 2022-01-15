import express from 'express';
import { getAllTasks, createNewTask, getTaskById, deleteTaskById } from '../controllers/taskControllers.js'

const router = express.Router();

router.route("/tasks").get(getAllTasks);
router.route("/add_new_task").post(createNewTask);
router.route("/tasks/:id").get(getTaskById);
router.route("/delete_task/:id").delete(deleteTaskById)

export default router;