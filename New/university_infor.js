const myslide = document.querySelectorAll('.slider-container'),
          dot = document.querySelectorAll('.dot');

    let counter = 1;
    slideFunction(counter);

    let timer = setInterval(autoSlide, 8000);

    function autoSlide() {
      counter += 1;
      slideFunction(counter);
    }

    function plusSlide(n) {
      counter += n;
      slideFunction(counter);
      resetTimer();
    }

    function currentSlide(n) {
      counter = n;
      slideFunction(counter);
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(autoSlide, 8000);
    }

    function slideFunction(n) {
      let i;
      for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
      }
      for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
      }
      if (n > myslide.length) {
        counter = 1;
      }
      if (n < 1) {
        counter = myslide.length;
      }
      myslide[counter - 1].style.display = "block";
      dot[counter - 1].classList.add('active');
    }