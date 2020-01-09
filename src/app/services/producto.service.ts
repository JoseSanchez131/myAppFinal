import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';


@Injectable()

export class ProductoService{

    productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [
        {
            nombre : "Taburete",
            descripcion : "De madera",
            categoria: "Hogar",
            precio: 123
        },
        {
            nombre : "Ordenador",
            descripcion : "APPLE",
            categoria: "tecnologia",
            estado: "Perfecto estado",
            precio: 1450
        },
        {
            nombre : "Ferrari",
            descripcion : "LAFERRARI",
            categoria: "motor",
            vehiculo:"coche",
            km:0,
            precio: 2450000
        },
      
      ]

    getProductos(): IProducto[]{
        return this.productos;
    }

    getProducto(nombre:string) : IProducto{

      return this.productos.find(x => x.nombre == nombre);
    }

}