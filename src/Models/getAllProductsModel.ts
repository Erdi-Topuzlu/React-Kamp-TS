import { productModel } from "./productModel";

export interface getAllProductsModel{
    total: number;
	skip: number;
	limit: number;
	products: productModel[];
}