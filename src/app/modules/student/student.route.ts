import express from 'express';
import { StudentControllers } from './student.controller';
const router = express.Router();


router.patch('/:studentId',StudentControllers.updateStudent)
router.delete("/:studentId",StudentControllers.deleteStudent)

export const StudentRoutes=router;