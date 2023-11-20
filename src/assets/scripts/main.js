
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { animate } from "motion"

const feather = require('feather-icons');

+( function() {
  
  feather.replace();

  document.getElementById("alien").addEventListener('click',function(){
    animate(
      "#alien",{
      opacity: 1,
      transform: "rotate(360deg)",
    })
  });

  document.getElementById("flower").addEventListener('click',function(){
    animate(
      "#flower",{
      opacity: 1,
      transform: "rotate(360deg)",
    })
  });

  var video = document.getElementById("home-video");
  var video_sound_button = document.getElementById("home-video-sound");

  if (video && video_sound_button){
    video_sound_button.addEventListener('click',function(){
      video.muted=!video.muted;
      if(video.muted){
        video_sound_button.innerHTML = feather.icons['volume-2'].toSvg();
      }else{
        video_sound_button.innerHTML = feather.icons['volume-x'].toSvg();
      }
    });
  }

  var menu = document.getElementById("menu");
  var menu_full = document.getElementById("menu-full");

  if (menu && menu_full){
    menu.addEventListener('click',function(){
      if(menu.getAttribute("state")=="open"){
        menu.innerHTML = feather.icons['x'].toSvg();
        menu.setAttribute("state", "closed");
        menu_full.classList.remove("nav__full--hidden");
      }else{
        menu.innerHTML = feather.icons['menu'].toSvg();
        menu.setAttribute("state", "open");
        menu_full.classList.add("nav__full--hidden");
      }
    });
  }

 var sliderReparto = new KeenSlider("#slider-reparto", {
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  var slider_reparto_prev = document.getElementById("slider-reparto-prev");
  var slider_reparto_next = document.getElementById("slider-reparto-next");

  if(slider_reparto_prev && slider_reparto_next){
    slider_reparto_prev.addEventListener("click", sliderReparto.prev);
    slider_reparto_next.addEventListener("click", sliderReparto.next);
  }

  var sliderDireccion = new KeenSlider("#slider-direccion", {
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  var slider_direccion_prev = document.getElementById("slider-direccion-prev");
  var slider_direccion_next = document.getElementById("slider-direccion-next");

  if(slider_direccion_prev && slider_direccion_next){
    slider_direccion_prev.addEventListener("click", sliderDireccion.prev);
    slider_direccion_next.addEventListener("click", sliderDireccion.next);
  }

  var sliderImagenes = new KeenSlider("#slider-imagenes", {
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  var slider_imagenes_prev = document.getElementById("slider-imagenes-prev");
  var slider_imagenes_next = document.getElementById("slider-imagenes-next");

  if( slider_imagenes_prev && slider_imagenes_next){
    slider_imagenes_prev.addEventListener("click", sliderImagenes.prev);
    slider_imagenes_next.addEventListener("click", sliderImagenes.next);
  }

})();