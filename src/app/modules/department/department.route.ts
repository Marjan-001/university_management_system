import express from 'express';

import validateMiddleware from '../../middleware/validateMiddleware';
import { DepartmentValidation } from './department.validation';
import { DepartmentControllers } from './department.controller';


const router = express.Router();
router.post(
  '/create-department',
  validateMiddleware(DepartmentValidation.updateDepartmentValidation),
  DepartmentControllers.createDepertment,
);
router.get('/', DepartmentControllers.getAllDepartment);
router.get('/:departmentId', DepartmentControllers.getSingleDepartment);
router.patch(
  '/:departmentId',
  validateMiddleware(DepartmentValidation.updateDepartmentValidation),
DepartmentControllers.updateDepartment,
);
export const DepartmentRoute=router;