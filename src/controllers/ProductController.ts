import ProductRepository from "../repositories/ProductRepository.js";
import { Request, Response } from "express";
import Product from "../models/Product.js";

const repository = new ProductRepository();

export default class ProductController {

    index(req: Request, res: Response) {
        const products = repository.findAll();
        res.status(200).json({ products });
    }

    show(req: Request, res: Response) {
        const id = Number(req.params.id);
        const product = repository.findById(id);
        res.status(200).json({ product });
    }

    create(req: Request, res: Response) {
        const { name, price, quantity } = req.body;

        const product = repository.create(new Product({ name, price, quantity }));
        res.status(201).json({ product });
    }

    update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { name, price, quantity } = req.body;

        const existingProduct = repository.findById(id);

        if (!existingProduct) {
            res.status(404).json({ message: "Product not found" });
            return;
        }

        // On fait une copie de l'objet AVANT modification
        const oldProduct = { ...existingProduct };

        const updatedProduct = repository.update(
            id,
            new Product({ name, price, quantity })
        );

        res.status(200).json({
            existingProduct: oldProduct,
            updatedProduct
        });
    }


    delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const existingProduct = repository.findById(id);

        if (!existingProduct) {
            res.status(404).json({ message: "Product not found" });
            return;
        }

        const deleted = repository.delete(id);
        res.status(200).json({ deleted });
    }

}