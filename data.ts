import { Product } from './types.ts';

let products: Product[] = [
    {
        id: '1',
        name: 'Product1',
        description: 'This is product one',
        price: 12.33
    },
    {
        id: '2',
        name: 'Product2',
        description: 'This is product two',
        price: 20.33
    },
    {
        id: '3',
        name: 'Product3',
        description: 'This is product three',
        price: 30.33
    },
    {
        id: '4',
        name: 'Product4',
        description: 'This is product four',
        price: 18.33
    },
    {
        id: '5',
        name: 'Product5',
        description: 'This is product five',
        price: 23.33
    },
    {
        id: '6',
        name: 'Product6',
        description: 'This is product six',
        price: 140.33
    },
]

export function getAllProducts(): Product[] {
    return products;
}

export function finOneById(id:string): Product | undefined {
    return products.find(p => p.id === id)
}

export function addProduct(product: Product):void {
    products.push(product);
}

export function updateProductWithId(id: string, newValue: {name?: string; description?:string; price?:number}): Product | boolean {
    let product = finOneById(id);
    
    if(product){
        newValue.name ? product.name = newValue.name : true;
        newValue.description ? product.description = newValue.description : true;
        newValue.price ? product.price = newValue.price : true;
        return product;
    } else {
        return false;
    }
}

export function deleteProductWithId(id: string): void {
    products = products.filter(p => p.id !== id)
}