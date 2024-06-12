/* 
Kode ini dilindungi hak cipta oleh Arifi Razzaq. 
 * Arifi Razzaq adalah pembuat kode ini. 
 * Pengguna dapat menghubungi Arifi Razzaq melalui WhatsApp atau berlangganan saluran YouTube-nya.
 * Hubungi WhatsApp : https://wa.me/6283193905842
 * Saluran YouTube : Arifi Razzaq Ofc
*/

import { Board } from './board.js';
import { Player } from './player.js';

export class Game {
  constructor() {
    this.board = new Board();
    this.players = [new Player('Red'), new Player('Blue'), new Player('Green'), new Player('Yellow')];
  }

  start() {
    console.log('Starting Ludo game...');
    // Initialize game setup and start the game loop
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  playTurn(player) {
    const diceValue = this.rollDice();
    console.log(`${player.name} rolled a ${diceValue}`);
    // Update player position based on dice value and game rules
  }
}
