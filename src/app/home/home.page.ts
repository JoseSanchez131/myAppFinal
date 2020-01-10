import { Component } from '@angular/core';
import { IProducto, ITecnologia, IMotor, IInmobiliaria } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

categoria: string;
nombre: string;
descripcion: string;
precio: number;
metros: number;
banios:number;
habitaciones:number;
localidad: string;
km: number;
anio: number;
vehiculo: string;
estado:string;


  constructor( private _toastCtrl : ToastController, private _productosService :ProductoService) {}

  ngOnInit(){
    //this.productos = this._productosService.getProductos();
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Producto añadido correctamente ',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  insertar(){

    let producto : (IProducto|ITecnologia|IInmobiliaria| IMotor) = {
                            nombre:this.nombre,
                            descripcion: this.descripcion,
                            categoria: this.categoria,
                            precio: this.precio,
                            metros: this.metros,
                            banios: this.banios,
                            habitaciones: this.habitaciones,
                            localidad: this.localidad,
                            km: this.km,
                            anio: this.anio,
                            vehiculo:this.vehiculo,
                            estado:this.estado,
                        };

                        this._productosService.setProductos(producto)
                        //console.log("Se ha insertado un elemento")
                        this.presentToast();
                        
  }

}