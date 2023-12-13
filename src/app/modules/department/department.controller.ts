import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { DeparmentServices } from "./department.service";

const createDepertment=catchAsync(async(req,res)=>{

const result=await DeparmentServices.createDepartmentIntoDb(req.body)
sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department created',
    data: result,
  });
}
);

const getAllDepartment= catchAsync(async(req,res)=>{
    const result=await DeparmentServices.getAllDepartmentFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Departments retrived',
        data: result,
      });
})
const getSingleDepartment= catchAsync(async(req,res)=>{
    const id = req.params.departmentId;

    const result=await DeparmentServices.getSingleDepartmentFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Department retrived',
        data: result,
      });
})
const updateDepartment= catchAsync(async(req,res)=>{
    const id = req.params.departmentId;

    const result=await DeparmentServices.updatDepartmentFromDB(id,req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Department updated successfully',
        data: result,
      });
})

export const DepartmentControllers={
    createDepertment,
    getAllDepartment,
    getSingleDepartment,
    updateDepartment
}