
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;
let maxClickA = 4;
let countClickA = 0;
let maxClickC = 0;
let countClicC = 0;

function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}


function pza1IzqFunc() {
  let af = -10;
 	
	Rota3D.initRotate( obj.w[139], obj.w[140], af*Math.PI/180);	
	
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

    var trIz = -6,
        trDr = -4;

function DesplazarXN(){
  var tr=1;
  if(trIz<= -1){
    for(
    var i=1; i<43; i++){
    obj.w[i].x=obj.w[i].x+tr;
    }
    for(
      var i=199; i<=200; i++){
      obj.w[i].x=obj.w[i].x+tr;
      }
      for(
        var i=193; i<=194; i++){
        obj.w[i].x=obj.w[i].x+tr;
        }
        for(
          var i=186; i<=187; i++){
          obj.w[i].x=obj.w[i].x+tr;
          }
    cv.setObj(obj);
    cv.paint();
    trIz++;
    trDr--;
  }
}

function DesplazarXP(){
  var tr=-1;
  if(trDr<=1){
  for(
    var i=1; i<43; i++){
      obj.w[i].x=obj.w[i].x+tr;
    }
    for(
      var i=199; i<=200; i++){
      obj.w[i].x=obj.w[i].x+tr;
      }
      for(
        var i=193; i<=194; i++){
        obj.w[i].x=obj.w[i].x+tr;
        }
        for(
          var i=186; i<=187; i++){
          obj.w[i].x=obj.w[i].x+tr;
          }
    cv.setObj(obj);
    cv.paint();
    trIz--;
    trDr++;
  }
}

    var trAt = -5,
        trAd = -4;
  function DesplazarYN(){
    var tr=1;
    if(trAt<= -1){
    for(
      var i=1; i<43; i++){
        obj.w[i].z=obj.w[i].z+tr;
      }
      for(
        var i=199; i<=200; i++){
        obj.w[i].z=obj.w[i].z+tr;
        }
        for(
          var i=193; i<=194; i++){
          obj.w[i].z=obj.w[i].z+tr;
          }
          for(
            var i=186; i<=187; i++){
            obj.w[i].z=obj.w[i].z+tr;
            }
      cv.setObj(obj);
      cv.paint();
      trAt++;
      trAd--;
    }
  }
    
    function DesplazarYP(){
      var tr=-1;
      if(trAd<=1){
      for(
        var i=1; i<43; i++){
          obj.w[i].z=obj.w[i].z+tr;
        }
        for(
          var i=199; i<=200; i++){
          obj.w[i].z=obj.w[i].z+tr;
          }
          for(
            var i=193; i<=194; i++){
            obj.w[i].z=obj.w[i].z+tr;
            }
            for(
              var i=186; i<=187; i++){
              obj.w[i].z=obj.w[i].z+tr;
              }
        cv.setObj(obj);
        cv.paint();
        trAt--;
        trAd++;
      }
    }

      var trARR = -4,
          trABJ = 2;

  function DesplazarAR(){
    var tr=1;
    if(trARR<= -1){
    for(
      var i=1; i<37; i++){
        obj.w[i].y=obj.w[i].y+tr;
      }
      for(
        var i=199; i<=200; i++){
        obj.w[i].y=obj.w[i].y+tr;
        }
        for(
          var i=193; i<=194; i++){
          obj.w[i].y=obj.w[i].y+tr;
          }
          for(
            var i=186; i<=187; i++){
            obj.w[i].y=obj.w[i].y+tr;
            }
      cv.setObj(obj);
      cv.paint();
      trARR++;
      trABJ--;
    }
  }
    
    function DesplazarAB(){
      var tr=-1;
      if(trABJ<=1){
      for(
        var i=1; i<37; i++){
          obj.w[i].y=obj.w[i].y+tr;
        }
        for(
          var i=199; i<=200; i++){
          obj.w[i].y=obj.w[i].y+tr;
          }
          for(
            var i=193; i<=194; i++){
            obj.w[i].y=obj.w[i].y+tr;
            }
            for(
              var i=186; i<=187; i++){
              obj.w[i].y=obj.w[i].y+tr;
              }
        cv.setObj(obj);
        cv.paint();
        trABJ++;
        trARR--;
      }
    }
    
    function AbrirG() {
      if (countClicC < maxClickC){
      let af = -8, af2 = -6, af3 = 8;
      Rota3D.initRotate( obj.w[199], obj.w[200], af*Math.PI/180);	
      for (let i = 19; i <= 27; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
        
      Rota3D.initRotate( obj.w[193], obj.w[194], af2*Math.PI/180);
      for (let i = 10; i <= 18; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      
      Rota3D.initRotate( obj.w[186], obj.w[187], af3*Math.PI/180);
      for (let i = 1; i <= 9; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      cv.setObj(obj);
      cv.paint();	
      countClickA --;
      countClicC ++;
    }
    }


    function CerrarG() {
      if (countClickA < maxClickA){
      let af = 8, af2 = 6, af3 = -8;
      Rota3D.initRotate( obj.w[199], obj.w[200], af*Math.PI/180);	
      for (let i = 19; i <= 27; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
        
      Rota3D.initRotate( obj.w[193], obj.w[194], af2*Math.PI/180);
      for (let i = 10; i <= 18; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      
      Rota3D.initRotate( obj.w[186], obj.w[187], af3*Math.PI/180);
      for (let i = 1; i <= 9; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      cv.setObj(obj);
      cv.paint();	
      countClickA ++;
      countClicC --; 
    }
    }

function pza12DerFunc() {
  let af = 10;
  console.log(obj.w[29], obj.w[30], obj.w[6]);
  Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
	
  for (let i = 101; i <= 140; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

function pza12IzqFunc() {
  let af = -10;
  console.log(obj.w[29], obj.w[30]);
	Rota3D.initRotate( obj.w[29], obj.w[30], af*Math.PI/180);	
	
  for (let i = 101; i <= 140; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  
	cv.setObj(obj);
  cv.paint();	
}

function Patitafunc(){
 let af = 20;
 Rota3D.initRotate( obj.w[101], obj.w[102], af*Math.PI/180);
  for(let i =1 ; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }

  cv.setObj(obj);
  cv.paint();
}

function MoveR(){
  var ramdom;

   ramdom = Math.ceil(Math.random()* 8);
   console.log(ramdom);
 switch(ramdom){
  case 1: DesplazarXP();
  break;
 case 2: DesplazarXN();
  break;
 case 3: DesplazarYP();
  break;
 case 4: DesplazarYN();
  break;
 case 5: DesplazarAB();
  break;
 case 6: DesplazarAR();
  break;
 case 7: AbrirG();
  break;
 case 8: CerrarG();
  break;
 }
 
}
let animmation;
function Iniciaranimacion(){
  animmation= setInterval(MoveR,300);
}
function detenerAnimacion(){
  clearInterval(animmation);
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);



//movimiento de piezas
document.getElementById('X-').addEventListener('click', DesplazarXN, false);
document.getElementById('X+').addEventListener('click', DesplazarXP, false);
document.getElementById('Y-').addEventListener('click', DesplazarYN, false);
document.getElementById('Y+').addEventListener('click', DesplazarYP, false);
document.getElementById('Z+').addEventListener('click', DesplazarAR, false);
document.getElementById('Z-').addEventListener('click', DesplazarAB, false);
document.getElementById('AG').addEventListener('click', AbrirG, false);
document.getElementById('CG').addEventListener('click', CerrarG, false);
document.getElementById('MovimR').addEventListener('click', Iniciaranimacion, false);
document.getElementById('Detener').addEventListener('click', detenerAnimacion, false);

let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);