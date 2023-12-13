import { TDepartment } from "./department.interface";
import { Department } from "./department.model";

const createDepartmentIntoDb = async (payload: TDepartment) => {
  const result = await Department.create(payload);
  return result;
};

//get a single department
const getSingleDepartmentFromDB = async (id: string) => {
  const result = await Department.findById(id).populate('academicFaculty');
  return result;
};
//get all department
const getAllDepartmentFromDB = async () => {
  const result = await Department.find().populate('academicFaculty');
  return result;
};

//update department

const updatDepartmentFromDB = async (id: string, payload: TDepartment) => {
  const result = await Department.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true },
  );
  return result;
};

export const DeparmentServices = {
  createDepartmentIntoDb,
   getAllDepartmentFromDB,
   getSingleDepartmentFromDB,
   updatDepartmentFromDB,
};
