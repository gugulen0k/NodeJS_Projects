import express from 'express';
import { getAllTasks, createNewTask, getTaskById, deleteTaskById, updateTaskById } from '../controllers/taskControllers.js'

const router = express.Router();

router.route("/tasks").get(getAllTasks);
router.route("/add_new_task").post(createNewTask);
router.route("/tasks/:id").get(getTaskById);
router.route("/delete_task/:id").delete(deleteTaskById);
router.route("/update_task/:id").patch(updateTaskById);

export default router;