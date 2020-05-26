import {getAllProducts, finOneById, addProduct, updateProductWithId, deleteProductWithId} from './data.ts';
import {Product} from './types.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts';

export function getProducts({response}: {response: any}) {
    response.body = {
        success: true,
        data: getAllProducts()
    }
}

export function getProduct({params, response}: {params: {id: string}, response: any}) {
    let product: Product | undefined  = finOneById(params.id);
    
    if(product) {
        response.status = 200;
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404;
        response.body = {
            success: false,
            data: {
                msg: "No product found"
            }
        }
    }
}

export async function postProduct({request, response}: {request: any, response: any}) {
    const body = await request.body();

    if(!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            data: {
                msg: 'No data'
            }
        }
    } else {
        const product: Product = body.value;
        product.id = v4.generate();
        addProduct(product);
        response.status = 401;
        response.body = {
            success: true,
            data: {
                msg: 'Product was successfully created',
                product: product
            }
        }
    }
}

export async function updateProduct({params, request, response}: {params: {id: string}, request: any, response: any}) {
    let product: Product | undefined  = finOneById(params.id);
    
    if(product) {
        const body = await request.body;
        const data: {name?: string; description?:string; price?:number} = body.value;
        let result = updateProductWithId(params.id, data)

        if(result){
            response.status = 200;
            response.body = {
                success: true,
                data: {
                    msg: "Product was successfullt updated",
                    product: result
                }
            }
        } else {
            response.status = 404;
            response.body = {
                success: false,
                data: {
                    msg: "No product found"
                }
            }
        }
    } else {
        response.status = 404;
        response.body = {
            success: false,
            data: {
                msg: "No product found"
            }
        }
    }
}

export function deleteProduct({params, response}: {params: {id: string}, response: any}) {
    deleteProductWithId(params.id)
}