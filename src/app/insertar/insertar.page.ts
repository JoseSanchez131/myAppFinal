import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {

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
  
  
  
  productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [] ;

  
  
    constructor( private _toastCtrl : ToastController, private _productosService :ProductoService) {}
  
    ngOnInit(){
      let ref = this._productosService.getProductos();
      
      ref.on("value", snapshot => {
        snapshot.forEach(child =>{
          let value = child.val();
          this.productos.push(value);
          console.log("he encontrado: " +child.val().nombre)
        })
      })
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
  
      if(this.categoria == "tecnologia")
      {
      this._productosService.setProductos({
                              nombre :this.nombre,
                              descripcion : this.descripcion,
                              categoria: this.categoria,
                              precio: this.precio,
                              // metros: this.metros,
                              // banios: this.banios,
                              // habitaciones: this.habitaciones,
                              // localidad: this.localidad,
                              // km: this.km,
                              // anio: this.anio,
                              // vehiculo:this.vehiculo,
                              estado:this.estado
                          });

                        }

      if(this.categoria == "hogar")
        {
          this._productosService.setProductos({
                  nombre :this.nombre,
                  descripcion : this.descripcion,
                  categoria: this.categoria,
                  precio: this.precio
          });
        }

        if(this.categoria == "motor")
        {
          this._productosService.setProductos({
                  nombre :this.nombre,
                  descripcion : this.descripcion,
                  categoria: this.categoria,
                  precio: this.precio,
                  km: this.km,
                  anio: this.anio,
                  vehiculo:this.vehiculo
          });
        }

        if(this.categoria == "inmobiliaria")
        {
          this._productosService.setProductos({
                  nombre :this.nombre,
                  descripcion : this.descripcion,
                  categoria: this.categoria,
                  precio: this.precio,
                  metros: this.metros,
                  banios: this.banios,
                  habitaciones: this.habitaciones,
                  localidad: this.localidad,
          });
        }
  
                    
                          
                          //console.log("Se ha insertado un elemento")
                          this.presentToast();
    }
  
  }
