import axios, { AxiosResponse } from 'axios';
import { getAllProductsModel } from '../Models/getAllProductsModel';
import { productModel } from '../Models/productModel';


const API_URL = "https://dummyjson.com/products";

class productService {

    getAll(): Promise<AxiosResponse<getAllProductsModel, any>>{
        return axios.get<getAllProductsModel>(API_URL);
    }

    getById(id: number){
        return axios.get<productModel>(API_URL + "/" + id);
    }

    delete(id: number){
        return axios.delete<productModel>(API_URL + "/" + id);
    }
    
}

export default new productService