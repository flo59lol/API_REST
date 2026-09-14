import Product from "../models/Product.js";

export default class ProductRepository {
    static products = [
        new Product({ id: 1, name: "Ordinateur portable", price: 899.99, quantity: 10 }),
        new Product({ id: 2, name: "Souris sans fil", price: 29.99, quantity: 25 }),
        new Product({ id: 3, name: "Clavier mécanique", price: 79.99, quantity: 15 }),
        new Product({ id: 4, name: "Écran 24 pouces", price: 179.99, quantity: 8 }),
        new Product({ id: 5, name: "Casque audio", price: 59.99, quantity: 20 }),
        new Product({ id: 6, name: "Webcam HD", price: 49.99, quantity: 12 }),
        new Product({ id: 7, name: "Disque SSD 1 To", price: 89.99, quantity: 18 }),
        new Product({ id: 8, name: "Clé USB 128 Go", price: 19.99, quantity: 30 }),
        new Product({ id: 9, name: "Tapis de souris", price: 14.99, quantity: 40 }),
        new Product({ id: 10, name: "Hub USB-C", price: 39.99, quantity: 22 }
        )
    ];

    findAll(): Product[] {
        return ProductRepository.products;
    }

    findById(id: number): Product | undefined {
        return ProductRepository.products.find(product => product.id === id);
    }

    create(product: Product): Product {
        const newId = ProductRepository.products.length > 0 ? Math.max(...ProductRepository.products.map(p => p.id ?? 0)) + 1 : 1;
        const newProduct = new Product({ id: newId, name: product.name, price: product.price, quantity: product.quantity });
        ProductRepository.products.push(newProduct);
        return newProduct;
    }

    update(id: number, updatedProduct: Product): Product | undefined {
        const productIndex = ProductRepository.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            const product = ProductRepository.products[productIndex];
            if (!product) {
                return undefined;
            }
            product.name = updatedProduct.name;
            product.price = updatedProduct.price;
            product.quantity = updatedProduct.quantity;
            return product;
        }
        return undefined;
    }

    delete(id: number): boolean {
        const productIndex = ProductRepository.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            ProductRepository.products.splice(productIndex, 1);
            return true;
        }
        return false;
    }

}