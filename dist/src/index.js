//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
var maxClickA = 4;
var countClickA = 0;
var maxClickC = 0;
var countClicC = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
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
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
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
    var af = -10;
    Rota3D.initRotate(obj.w[139], obj.w[140], af * Math.PI / 180);
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
var trIz = -6, trDr = -4;
function DesplazarXN() {
    var tr = 1;
    if (trIz <= -1) {
        for (var i = 1; i < 43; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trIz++;
        trDr--;
    }
}
function DesplazarXP() {
    var tr = -1;
    if (trDr <= 1) {
        for (var i = 1; i < 43; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].x = obj.w[i].x + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trIz--;
        trDr++;
    }
}
var trAt = -5, trAd = -4;
function DesplazarYN() {
    var tr = 1;
    if (trAt <= -1) {
        for (var i = 1; i < 43; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trAt++;
        trAd--;
    }
}
function DesplazarYP() {
    var tr = -1;
    if (trAd <= 1) {
        for (var i = 1; i < 43; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].z = obj.w[i].z + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trAt--;
        trAd++;
    }
}
var trARR = -4, trABJ = 2;
function DesplazarAR() {
    var tr = 1;
    if (trARR <= -1) {
        for (var i = 1; i < 37; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trARR++;
        trABJ--;
    }
}
function DesplazarAB() {
    var tr = -1;
    if (trABJ <= 1) {
        for (var i = 1; i < 37; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 199; i <= 200; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 193; i <= 194; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        for (var i = 186; i <= 187; i++) {
            obj.w[i].y = obj.w[i].y + tr;
        }
        cv.setObj(obj);
        cv.paint();
        trABJ++;
        trARR--;
    }
}
function AbrirG() {
    if (countClicC < maxClickC) {
        var af = -8, af2 = -6, af3 = 8;
        Rota3D.initRotate(obj.w[199], obj.w[200], af * Math.PI / 180);
        for (var i = 19; i <= 27; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[193], obj.w[194], af2 * Math.PI / 180);
        for (var i = 10; i <= 18; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[186], obj.w[187], af3 * Math.PI / 180);
        for (var i = 1; i <= 9; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickA--;
        countClicC++;
    }
}
function CerrarG() {
    if (countClickA < maxClickA) {
        var af = 8, af2 = 6, af3 = -8;
        Rota3D.initRotate(obj.w[199], obj.w[200], af * Math.PI / 180);
        for (var i = 19; i <= 27; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[193], obj.w[194], af2 * Math.PI / 180);
        for (var i = 10; i <= 18; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate(obj.w[186], obj.w[187], af3 * Math.PI / 180);
        for (var i = 1; i <= 9; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countClickA++;
        countClicC--;
    }
}
function pza12DerFunc() {
    var af = 10;
    console.log(obj.w[29], obj.w[30], obj.w[6]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12IzqFunc() {
    var af = -10;
    console.log(obj.w[29], obj.w[30]);
    Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
    for (var i = 101; i <= 140; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Patitafunc() {
    var af = 20;
    Rota3D.initRotate(obj.w[101], obj.w[102], af * Math.PI / 180);
    for (var i = 1; i <= 8; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function MoveR() {
    var ramdom;
    ramdom = Math.ceil(Math.random() * 8);
    console.log(ramdom);
    switch (ramdom) {
        case 1:
            DesplazarXP();
            break;
        case 2:
            DesplazarXN();
            break;
        case 3:
            DesplazarYP();
            break;
        case 4:
            DesplazarYN();
            break;
        case 5:
            DesplazarAB();
            break;
        case 6:
            DesplazarAR();
            break;
        case 7:
            AbrirG();
            break;
        case 8:
            CerrarG();
            break;
    }
}
var animmation;
function Iniciaranimacion() {
    animmation = setInterval(MoveR, 300);
}
function detenerAnimacion() {
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
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
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
