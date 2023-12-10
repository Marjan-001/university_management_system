import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import sendResponse from '../../utilities/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const creatAcademiceSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created',
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrived successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrived successfully',
    data: result,
  });
});

const updateAcademicSemester=catchAsync(async(req,res)=>{
    const id=req.params.semesterId

    const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(id,req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Updated successfully",
        data:result
    })
})

export const CreateAcademicSemesterController = {
  creatAcademiceSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester
};
