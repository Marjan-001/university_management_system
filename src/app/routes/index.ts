import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { DepartmentRoute } from '../modules/department/department.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculty-routes',
    route: AcademicFacultyRoute,
  },
  {
    path: '/department',
    route: DepartmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;