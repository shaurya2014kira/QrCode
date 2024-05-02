
const ApiUrls = {


  auth: {
    login: "/login/loginCompanyUser",

  },
  companyDetails: {
    companyAddress: {
      addCompanyAddress: "/companyAddress/addcompanyAddress",
      updateCompanyAddress: "/companyAddress/updatecompanyAddress",
      listCompanyAddress: "/companyAddress/listcompanyAddress",
      deleteCompanyAddress: "/companyAddress/deletecompanyAddress",
      getCompanyAddress: "/companyAddress/getcompanyAddress",
    }
  },
  department: {
    addDepartment: "/department/adddepartment",
    updateDepartment: "/department/updatedepartment",
    listDepartment: "/department/listdepartment",
    deleteDepartment: "/department/deletedepartment",
    getDepartment: "/department/getdepartment",
  },
  companyUser: {
    companyPlanModuleList: "humanResource/companyUser/companyPlanModuleList",
    companyUserCreate: "/humanResource/companyUser/create",
    companyUserUpdate: "/humanResource/companyUser/update",
    companyUserGet: "/humanResource/companyUser/get",
    companyUserDelete: "/humanResource/companyUser/delete",
    companyUserList: "/humanResource/companyUser/list",
    companyDetails: "/systemSettings/companyDetails/getComapnayDetails"
  },
  visitorDepartmentList: {
    departmentList: "visitor/departmentList",
    companyUser: '/visitor/companyUser',
    visitorDetails:"/visitor/getData",
    visitorPass:"/visitor/pass",
    visitorPassDetails:"/visitor/getVisitorDetails"
  }


}

export default ApiUrls;