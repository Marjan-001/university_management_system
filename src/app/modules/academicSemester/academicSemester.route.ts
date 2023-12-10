
import express from 'express'
import { CreateAcademicSemesterController } from './academicSemester.controller';
import validateMiddleware from '../../middleware/validateMiddleware';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router= express.Router()
router.post('/create-academic-semester', validateMiddleware(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,CreateAcademicSemesterController.creatAcademiceSemester)
router.get('/',CreateAcademicSemesterController.getAllAcademicSemesters)
router.get('/:semesterId',CreateAcademicSemesterController.getSingleAcademicSemester)
router.patch('/:semesterId',validateMiddleware(AcademicSemesterValidation.updateAcademicSemesterValidationSchema),CreateAcademicSemesterController.updateAcademicSemester)
export const AcademicSemesterRoute = router;