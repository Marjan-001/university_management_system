import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { StudentServices } from "./student.service";

const deleteStudent=catchAsync(async(req,res)=>{
const {studentId}=req.params;
const result= await StudentServices.deleteStudentFromDB(studentId);
sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Student deleted successfully',
    data:result
})
})
export const StudentControllers={
    deleteStudent
}