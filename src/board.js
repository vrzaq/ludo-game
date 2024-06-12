/* 
Kode ini dilindungi hak cipta oleh Arifi Razzaq. 
 * Arifi Razzaq adalah pembuat kode ini. 
 * Pengguna dapat menghubungi Arifi Razzaq melalui WhatsApp atau berlangganan saluran YouTube-nya.
 * Hubungi WhatsApp : https://wa.me/6283193905842
 * Saluran YouTube : Arifi Razzaq Ofc
*/

export class Board {
  constructor() {
    this.grid = this.createGrid();
  }

  createGrid() {
    // Create the Ludo board grid
    return Array(15).fill(null).map(() => Array(15).fill(null));
  }

  display() {
    // Display the board
    console.log(this.grid.map(row => row.join(' ')).join('\n'));
  }
}
