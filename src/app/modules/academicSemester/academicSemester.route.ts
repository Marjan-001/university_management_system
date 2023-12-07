
import express from 'express'
import { CreateAcademicSemesterController } from './academicSemester.controller';
import validateMiddleware from '../../middleware/validateMiddleware';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router= express.Router()
router.post('/create-academic-semester', validateMiddleware(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,CreateAcademicSemesterController.creatAcademiceSemester)

export const AcademicSemesterRoute = router;