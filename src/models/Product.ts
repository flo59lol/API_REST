interface ProductProps {
    id?: number | null;
    name: string;
    price: number;
    quantity?: number;
};

export default class Product {
    public id: number | null;
    public name: string;
    public price: number;
    public quantity: number;

    constructor({ id = null, name, price, quantity = 0 } : ProductProps) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}