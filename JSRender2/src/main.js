"use strict"
console.info("main.js");

import {BoxGeometry} from './BoxGeometry';

class MainWnd {
   constructor() {
      this.containerDiv = document.getElementById('mainContainer');
      this.canvas = document.getElementById("mainCanvas");
      this.ctx = this.canvas.getContext("2d");
      console.log(this.containerDiv);
      this.canvasWidth = this.containerDiv.clientWidth;
      this.canvasHeight = this.containerDiv.clientHeight;
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
      this.imageData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
      this.clear();
   }

   clear() {
      for(let i = 0; i < this.canvasHeight; i++) {
         for(let j=0; j <this.canvasWidth;j++) {
            const index = (i * this.canvasWidth  + j) * 4;
            this.imageData.data[index + 3] = 255;
         }
      }
   }



   drawScene() {

   }



   render() {
      this.ctx.putImageData(this.imageData, 0, 0);
   }
}

const mainWnd = new MainWnd();
// mainWnd.run();
mainWnd.render();
console.log('endl;');




