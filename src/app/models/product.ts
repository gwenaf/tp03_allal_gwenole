// define the model of a Product entity

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
    category: string;
    createdDate: Date;
    updatedDate: Date;
}

