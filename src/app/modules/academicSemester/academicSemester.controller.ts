import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";


const creatAcademiceSemester = catchAsync(async(req,res)=>{

const  result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body) ;

    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:'Academic semester created',
        data:result


    })
})
export const CreateAcademicSemesterController={
creatAcademiceSemester
}