import axios from "axios";
import { formatData, formatDataPlain } from "../utils/encrypt";
import ApiUrls from "../api/apiRoutes";

export const apiUrl = import.meta.env.VITE_API;
let token = JSON.parse(localStorage.getItem("userData"));
token = token ? token.login_token : "abcd1234";

export const fetchApi = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

fetchApi.interceptors.request.use((config) => {
  const storedToken = JSON.parse(localStorage.getItem("userData") || "{}");
  if (storedToken) {
    config.headers.Authorization = `Bearer ${storedToken.token || ""}`;
  }
  return config;
});

class FetchData {
  async getDepartment(data) {
    try {
      const response = await fetchApi.post(ApiUrls.visitorDepartmentList.departmentList,formatDataPlain(data));
      return response.data;
    } catch (error) {
      
      console.error("Error while fetching department:", error);
      throw error; 
    }
  }
  async getCompanyList(data){
   const res=await
    fetchApi.post(ApiUrls.visitorDepartmentList.companyUser,formatDataPlain(data))
   return res.data
  }
  async visitorDetails(data){
    const res=await fetchApi.post(ApiUrls.visitorDepartmentList.visitorDetails,formatDataPlain(data))
    return res.data
  }
  async Visitorpass(data){
    const res= await fetchApi.post(ApiUrls.visitorDepartmentList.visitorPass,formatDataPlain(data))
    return res.data
  }
  async VisitorPassDetails(data){
    const res= await fetchApi.post(ApiUrls.visitorDepartmentList.visitorPassDetails,formatDataPlain(data))
    return res.data
  }
}

export default new FetchData();
