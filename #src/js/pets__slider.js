{
  //VARYABLES
  let prevBtn = document.querySelector('.btn-control_prev');
  let nextBtn = document.querySelector('.btn-control_next');
  let sliderTrack = document.querySelector('.slider__track');
  let sliderImages = document.getElementsByClassName('slider__item');
  let firstImage = document.querySelector('.slider__item');

  firstImage.classList.add('slider__item--active');

  nextBtn.addEventListener('click', function (evt) {
    let i = 0;
    while (i < sliderImages.length) {
      if (sliderImages[i].classList.contains('slider__item--active') == true) {
        if (i == sliderImages.length - 1) {
          sliderImages[i].classList.remove('slider__item--active');
          sliderImages[0].classList.add('slider__item--active');
          console.log(i);
          break
        } else {
          sliderImages[i].classList.remove('slider__item--active');
          sliderImages[i + 1].classList.add('slider__item--active');
          console.log(i);
          break
        }
      }
      i++
    }
  });
  
  prevBtn.addEventListener('click', function (evt) {
    let i = 0;
    while (i < sliderImages.length) {
      if (sliderImages[i].classList.contains('slider__item--active') == true) {
        if (i == 0) {
          sliderImages[i].classList.remove('slider__item--active');
          sliderImages[sliderImages.length - 1].classList.add('slider__item--active');
          console.log(i);
          break
        } else {
          sliderImages[i].classList.remove('slider__item--active');
          sliderImages[i - 1].classList.add('slider__item--active');
          console.log(i);
          break
        }
      }
      i++
    }
  });
  
  

    



}