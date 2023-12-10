import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //academic semester code mapping
  
  
  if(academicSemesterNameCodeMapper[payload.name]!=payload.code){
throw new Error('Invalid semester entered')
  }
  //create semester
  const result = await AcademicSemester.create(payload);
  return result;
};

//get all semester from DB
const getAllAcademicSemesterFromDB=async()=>{
  const result = await AcademicSemester.find();
  return result;
}
//get single academic semester from db
const getSingleAcademicSemesterFromDB= async(id:string)=>{
  const result = await AcademicSemester.findById(id)
  return result;
}
// update semester info
const updateAcademicSemesterIntoDB = async(id:string,
  payload:Partial<TAcademicSemester>)=>{
    if(payload.name&&payload.code&& academicSemesterNameCodeMapper[payload.name]!=payload.code){
      throw new Error('Invalid Semester code')
    }
const result = await AcademicSemester.findOneAndUpdate({_id:id},payload,{new:true})
return result;
}
export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB
};
