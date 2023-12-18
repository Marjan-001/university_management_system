import mongoose from "mongoose";
import { Student } from "./student.model"
import Apperror from "../../errors/error";
import httpStatus from "http-status";
import { TStudent } from "./student.interface";


const updateStudentIntoDB=async(id:string,payload:Partial<TStudent>)=>{
    const {name,guardian,localGuardian,...remainingData}=payload;
    const modifiedUpdatedData: Record<string, unknown> = {
        ...remainingData,
      };
      if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
          modifiedUpdatedData[`name.${key}`] = value;
        }
      }
    
      if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
          modifiedUpdatedData[`guardian.${key}`] = value;
        }
      }
    
      if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
          modifiedUpdatedData[`localGuardian.${key}`] = value;
        }
      }
    
      console.log(modifiedUpdatedData);
    
      const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
        new: true,
        runValidators: true,
      });
      return result; 

}
const deleteStudentFromDB= async(id:string)=>{
    const session = await mongoose.startSession();
    try{
        session.startTransaction();

        const deletedStudent= await Student.findOneAndUpdate({id},{isDeleted:true},{new:true,session});
if(!deletedStudent){
    throw new Apperror(httpStatus.BAD_REQUEST,'Failed to delete student')
}

const deletedUser= await Student.findOneAndUpdate({id},{isDeleted:true},{new:true,session})
if(!deletedUser){
    throw new Apperror(httpStatus.BAD_REQUEST,'Failed to delete user')
}
await session.commitTransaction();
await session.endSession();
return deletedStudent;
    }
    catch(err){
await session.abortTransaction();
await session.endSession()
throw new Error('Failed to delete student')
    }
 
}
export const StudentServices={
    deleteStudentFromDB,
    updateStudentIntoDB
}