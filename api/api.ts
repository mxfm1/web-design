"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
});

export default api;

export const getProducts = async() => {
    try {
        const response = await api.get("products/");
        console.log('res', response.data);
        console.log(typeof response.data);
        revalidatePath("/products")
        return response.data;
    } catch (error) {
        console.log('Hubo un error', error);
        throw error;
    }
}

export const getProductsByCategory = async() => {
    try{
        const response = await api.get("category")
    }
    catch(error){
        console.log('Hubo un error',error)
    }
}
