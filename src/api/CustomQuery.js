import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { decryptData, formatData, formatDataPlain } from '../utils/encrypt';
const api = import.meta.env.VITE_API;



let token = JSON.parse(localStorage.getItem("userData"));
token = token ? token.login_token : "abcd1234";
let myHeaders = new Headers();
export const fetchApi = axios.create({
    baseURL: api,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Credentials": "true",

        Authorization: token ? `Bearer ${token}` : null,
        // token: apiData ? JSON.stringify(apiData.token):null,
    },
});
fetchApi.interceptors.request.use((config) => {
    const storedToken = JSON.parse(localStorage.getItem("userData") || "{}");
    if (storedToken) {
        config.headers.Authorization = `Bearer ${storedToken.token || ""}`;
    }
    return config;
});


export const useCustomMutation = (url) => {
    const { setAuthUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // const query = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: async () => {
    //         try {
    //             const res = await axios(url, { withCredentials: true });
    //             const data=res.data
    //             return data;
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             throw error;
    //         }
    //     }
    // });


    const mutation = useMutation({
        mutationFn: async (userData) => {
            console.log("alkfjkasljdflkjajfklasdf",userData);
            try {
                const res = await fetchApi.post(url,userData, {
                    withCredentials: true
                });
                const decryptedData = decryptData(res.data.data);

                return decryptedData;
            } catch (error) {
                console.error('Mutation error:', error);
                throw new Error('Failed to login');
            }
        }
    });

    return { mutation };
};
