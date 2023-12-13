import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateMiddleware from '../../middleware/validateMiddleware';
import { FacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.post(
  '/create-academic-faculty',
  validateMiddleware(FacultyValidation.updateAcademicFacultyValidation),
  AcademicFacultyController.createAcademicFaculty,
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:facultyId',
  validateMiddleware(FacultyValidation.updateAcademicFacultyValidation),
  AcademicFacultyController.updateAcademicFaculty,
);
export const AcademicFacultyRoute=router;