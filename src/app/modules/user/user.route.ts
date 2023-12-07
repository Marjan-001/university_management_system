import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { createstudentValidationSchema } from '../student/student.validation';
import validateMiddleware from '../../middleware/validateMiddleware';

const router = express.Router();

router.post(
  '/create-student',
  validateMiddleware(createstudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
