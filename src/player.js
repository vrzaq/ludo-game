/* 
Kode ini dilindungi hak cipta oleh Arifi Razzaq. 
 * Arifi Razzaq adalah pembuat kode ini. 
 * Pengguna dapat menghubungi Arifi Razzaq melalui WhatsApp atau berlangganan saluran YouTube-nya.
 * Hubungi WhatsApp : https://wa.me/6283193905842
 * Saluran YouTube : Arifi Razzaq Ofc
*/

export class Player {
  constructor(name) {
    this.name = name;
    this.position = 0; // Initial position
  }

  move(steps) {
    this.position += steps;
    console.log(`${this.name} moved to position ${this.position}`);
  }
}
