import * as playerjs from "./player.js"

// seting up player module
export const playerModel = document.querySelector(".player")
       playerModel.entityObject = playerjs.player

       
// all enemy boxes (check side it goes reall long this way => )
export const enemy_box1 = document.querySelector(".enemy-grid").children[0];export const enemy_box2 = document.querySelector(".enemy-grid").children[1];export const enemy_box3 = document.querySelector(".enemy-grid").children[2];export const enemy_box4 = document.querySelector(".enemy-grid").children[3];export const enemy_box5 = document.querySelector(".enemy-grid").children[4];export const enemy_box6 = document.querySelector(".enemy-grid").children[5];export const enemy_box7 = document.querySelector(".enemy-grid").children[6];export const enemy_box8 = document.querySelector(".enemy-grid").children[7];

export function domInit() {
  
}