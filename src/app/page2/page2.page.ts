import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {

  //inisialiasi variabel
  showInfo = false;
  closeInfo = false;

  aluaspenampang: any = 0;
  gayatekan:any = 0;
  panjang: any = 0;
  lebar:any = 0;
  total: any = 0;
  kesimpulan:any = "-";

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'MOHON CEK KEMBALI ISIAN DIATAS',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  

  goShowInfo() {
    this.showInfo = true;
  }

  goCloseInfo() {
    this.showInfo = false;
  }

  hasilA(){

    if (this.gayatekan == null || this.gayatekan == 0) {
      this.gayatekan = 0
      this.presentToast()
    }

    else {
      this.aluaspenampang = this.gayatekan / 5000
    }

  }

  hasil() {

    if (this.panjang == null || this.lebar == null || this.gayatekan == null|| this.aluaspenampang == null
        || this.panjang == 0 || this.lebar == 0 || this.gayatekan == 0|| this.aluaspenampang == 0) {

          this.panjang = 0 
          this.lebar = 0
          this.gayatekan = 0
          this.aluaspenampang = 0

      this.presentToast()
    }

    else {

      this.total = this.panjang * this.lebar
    
    if (this.total >= this.aluaspenampang) {
      this.kesimpulan="VALID"
    }
    else {
      this.kesimpulan="TIDAK VALID"
    }

    }

  }

  reset() {
    this.panjang = 0
    this.lebar = 0
    this.gayatekan = 0
    this.aluaspenampang = 0
    this.kesimpulan = "-"
  }

}
