let imagen;
let rutaimagen;

imagen = document.getElementById("img1");
rutaimagen = imagen.src;

imagen.addEventListener("mouseover",function(){
    //console.log(imagen);
    rutaimagen = "Imagenes/cr7.jpg";
    imagen.src = rutaimagen;
});



imagen.addEventListener("mouseleave",function(){
    //console.log(imagen);
    rutaimagen = "Imagenes/lionel-messi-1711467863-132837.jpg";
    imagen.src = rutaimagen;
});
