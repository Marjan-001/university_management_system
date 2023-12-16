import mongoose from "mongoose";
import { Student } from "./student.model"
import Apperror from "../../errors/error";
import httpStatus from "http-status";

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
    }
 
}
export const StudentServices={
    deleteStudentFromDB
}