export default function canvasAnimate () {
    const d= document;
    const w = window;
    const gravedad = 0.30;
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
    $ser1 = document.querySelector(".ser1"),
    $ser2 = document.querySelector(".ser2"),
    $ser3 = document.querySelector(".ser3"),
    $ser4 = document.querySelector(".ser4");
    
    function draw () {
        grad1.addColorStop(0,"#3F69FF"); 
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
        }

        if(w.pageYOffset > 1800){$service1.classList.add("ser_opacity")} else {$service1.classList.remove("ser_opacity")};
        if(y > 1300) {$service3.classList.add("ser_opacity");} else {$service3.classList.remove("ser_opacity")};
        if(y > 895) {$service2.classList.add("ser_opacity")} else {$service2.classList.remove("ser_opacity")};
        if(y > 480) {$service4.classList.add("ser_opacity")} else {$service4.classList.remove("ser_opacity")};
        //squares
        if(w.pageYOffset > 1812){
            $ser1.classList.add("ser_opacity")
            $ser1.classList.add("fadeInLeft");
            $ser1.classList.add("transport");
        }else {
            $ser1.classList.remove("fadeInLeft");
            $ser1.classList.remove("ser_opacity")
            $ser1.classList.add("transport");
        };
        if(y > 1300) {
            $ser3.classList.add("ser_opacity")
            $ser3.classList.add("fadeInRight")
            $ser3.classList.add("transport")
        }else {
            $ser3.classList.remove("fadeInRight")
            $ser3.classList.remove("ser_opacity")
            $ser3.classList.remove("transport")
        };
        if(y > 895) {
            $ser2.classList.add("ser_opacity")
            $ser2.classList.add("fadeInLeft")
            $ser2.classList.add("transport")
        }else {
            $ser2.classList.remove("ser_opacity")
            $ser2.classList.remove("fadeInLeft")
            $ser2.classList.remove("transport")
        };
        if(y > 480) {
            $ser4.classList.add("ser_opacity")
            $ser4.classList.add("fadeInRight")
            $ser4.classList.add("transport")
        }else {
            $ser4.classList.remove("fadeInRight")
            $ser4.classList.remove("ser_opacity")
            $ser4.classList.remove("transport")
        };
        if(playing) requestAnimationFrame(draw)
    }
    requestAnimationFrame(draw);
}