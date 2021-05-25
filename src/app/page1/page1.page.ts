import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {

  //inisialiasi variabel
  value:string;
  a:boolean = false;
  b:boolean = false;

  panjang: any = 0;
  lebar: any = 0;
  derajat: any = 0;
  hasil: any = 0;
  rad: any;
  showInfo = false;
  closeInfo = false;

  constructor(public toastController: ToastController) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'MOHON CEK KEMBALI ISIAN DIATAS',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  

 //Fungsi hitung1
 hitung() {

  if (this.panjang == null || this.lebar == null || this.derajat == null ||
      this.panjang == 0 || this.lebar == 0 || this.derajat == 0) {
    
        this.panjang = 0
        this.lebar = 0
        this.derajat = 0
        this.hasil = 0

        this.presentToast()
    
  }

  else {
    this.hasil = ((this.panjang * this.lebar) / Math.cos(this.derajat * Math.PI / 180));
  }

  }

 goShowInfo() {
   this.showInfo = true;
 }

 goCloseInfo() {
   this.showInfo = false;
 }


 //Fungsi pilihan atap
 radioselected() {
   if (this.value == 'mp'){
    this.a = true;
    this.b = false;
   }
   else {
     this.b = true;
     this.a = false;
     this.reset()
   }
 }

 //Fungsi reset
 reset() {
   this.panjang = 0
   this.lebar = 0
   this.derajat = 0
   this.hasil = 0
   
 }

}
