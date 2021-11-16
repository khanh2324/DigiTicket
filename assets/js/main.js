// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const sliderList = $$('.slider-item');
// const sliderItem = $('.slider-item');


// const nextBtnSlider = $('#slider-btn_right');
// const prevBtnSlider = $('#slider-btn_left');
// let idex = 0;
// //Slider

// const app = {
//     handleEvent: function(){
//         function runSlider() {
//             ++idex;
//             if(idex > sliderList.length - 1) {
//                 idex = 0;
//             }
    
//             carousel.sliderList.transform = `translateX(${-idex * sliderItem.offsetWidth}px)`;
//         }
    
//         setInterval(runSlider, 4000);
    
//         nextBtnSlider.onclick = function(){
//             ++idex;
//             if(idex > sliderList.length - 1) {
//                 idex = 0;
//             }
    
//             carousel.sliderList.transform = `translateX(${-idex * sliderItem.offsetWidth}px)`;
//         };
    
//         prevBtnSlider.onclick = function(){
//             --idex;
//             if(idex < 0) {
//                 idex = sliderList.length - 1;
//             }
    
//             carousel.sliderList.transform = `translateX(${-idex * sliderItem.offsetWidth}px)`;
//         };
//     },

//     start: function(){
//         this.handleEvent();
//     }
// }

// app.start();
