import { removeClass, addClass } from './hooks/classHandler.js'
export default function canvasAnimate () {
    const w = window,
    d= document,
    gravedad = 0.30;
    let canvas = d.querySelector("#board"),
    ctx = canvas.getContext("2d"),
    grad1 = ctx.createLinearGradient(0,0,0,1400),
    playing = true, //Cambiar a True para ver los resultados
    size = 40,
    tiempo = 0,
    y = 50,
    velocidad = 0,
    $service1 = d.querySelector(".service1"),
    $service2 = d.querySelector(".service2"),
    $service3 = d.querySelector(".service3"),
    $service4 = d.querySelector(".service4"),
    $ser1 = d.querySelector(".ser1"),
    $ser2 = d.querySelector(".ser2"),
    $ser3 = d.querySelector(".ser3"),
    $ser4 = d.querySelector(".ser4");
    
    function draw () {
        grad1.addColorStop(.5,"#3F69FF"); 
        grad1.addColorStop(1,"#EF0070"); 
        ctx.fillStyle=grad1; 

        if(window.pageYOffset > 1650) {
            ctx.fillRect(0,y,1,size);
            tiempo = tiempo + 0.00265;
            velocidad = velocidad + gravedad * tiempo;
            y = y + velocidad;
        }else {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            velocidad = 0;
            tiempo = 0;
            y = 50;
        };

        if(w.pageYOffset > 1800) addClass($service1, 'ser_opacity');
        else removeClass($service1, 'ser_opacity');

        if(y > 1300) addClass($service3, 'ser_opacity');
        else removeClass($service3, 'ser_opacity');

        if(y > 895) addClass($service2, 'ser_opacity');
        else removeClass($service2, 'ser_opacity');

        if(y > 480) addClass($service4, 'ser_opacity');
        else removeClass($service4, 'ser_opacity');
        //squares
        if(w.pageYOffset > 1812) addClass($ser1, 'ser_opacity', 'fadeInLeft', 'transport');
        else {
            removeClass($ser1, 'fadeInLeft', 'ser_opacity');
            addClass($ser1, 'transport');
        };

        if(y > 1300) addClass($ser3, 'ser_opacity', 'fadeInRight', 'transport');
        else removeClass($ser3, 'fadeInRight', 'ser_opacity', 'transport');

        if(y > 895) addClass($ser2, 'ser_opacity', 'fadeInLeft', 'transport');
        else removeClass($ser2, 'ser_opacity', 'fadeInLeft', 'transport');

        if(y > 480) addClass($ser4, 'ser_opacity', 'fadeInRight', 'transport');
        else removeClass($ser4, 'ser_opacity', 'fadeInRight', 'transport');

        if(playing) requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
};