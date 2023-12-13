import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';
//creating faculty
const createAcademicFacultyIntoDb = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

//get a single faculty
const getSingleFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
//get all faculty
const getAllFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

//update faculty

const updateFacultyFromDB = async (id: string, payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDb,
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFacultyFromDB,
};
