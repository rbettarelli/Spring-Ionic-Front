import { Injectable } from "@angular/core";
import { Cart } from "../../models/cart";
import { ProdutoDTO } from "../../models/produto.dto";
import { StorageService } from "../storage.service";

@Injectable() 
export class CartService {

    constructor(public storage: StorageService) {

    }

    createorClearCart() : Cart {
        let cart : Cart = {items: []};
        this.storage.setCart(cart);
        return cart;

    }

    getCart() : Cart {
        let cart : Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createorClearCart();
        }
        return cart;

    }

    addProduto(produto : ProdutoDTO) : Cart {
        let cart = this.getCart();
        let positition = cart.items.findIndex(x => x.produto.id == produto.id);
        if (positition == -1) {
            cart.items.push({quantidade: 1, produto: produto});

        }
        this.storage.setCart(cart);
        return cart;

 }

}