const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  
    // And if we need scrollbar
  });
  
  let btnSl = document.querySelector('.swiper-button-prev');
  let btnSl2 = document.querySelector('.swiper-button-next');
  btnSl.onclick = function () {
    event.preventDefault();
    document.querySelector('.btn-left').click();
  }
  btnSl2.onclick = function () {
    event.preventDefault();
    document.querySelector('.btn-right').click();
  }
  
  if (screen.width >= 1200) {
    const swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 4,
      spaceBetween: 90,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 2500,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
      },
    });
  }
  else if (screen.width < 1200 && screen.width > 767) {
    const swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 3,
      spaceBetween: 34,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 2500,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
      },
    });
  }
  if (screen.width < 767) {
    const swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 2,
      spaceBetween: 60,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 2500,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
      },
    });
  }
  
  let activeSlide = document.querySelector('.active-slide');
  let swipSlide = document.querySelectorAll('.slider-sw');
  let nextSlide = document.querySelector('.swiper-button-next');
  let prevSlide = document.querySelector('.swiper-button-prev');
  
  var observer = new MutationObserver(function () {
    for (let i = 0; i < swipSlide.length; i++) {
      let number = Number.parseInt(swipSlide[i].attributes[1].nodeValue);
      if (swipSlide[i].classList.contains('swiper-slide-active') == true) {
  
        activeSlide.innerHTML = number + 1;
      }
    }
  });
  
  for (let i = 0; i < swipSlide.length; i++) {
    observer.observe(swipSlide[i], {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class']
    });
  }
  
  let interCard = document.querySelectorAll('.interactive-card');
  let interCardFull = document.querySelectorAll('.interactive-card__full');
  let interCardContent = document.querySelectorAll('.interactive-card__content');
  let interTitle = document.querySelectorAll('.interactive-card__full .title');
  
  for (let i = 0; i < interCard.length; i++) {
    interCard[i].onclick = function () {
      if (this.classList.contains('interactive-card__active') == true) {
        this.classList.remove('interactive-card__active');
        interCardFull[i].classList.remove('interactive-card__full--active');
        if (screen.width < 1200) {
          interTitle[i].style.opacity = '1';
        }
        interCardContent[i].classList.remove('interactive-card__content--active');
        for (let j = 0; j < interCard.length; j++) {
          interCard[j].classList.remove('interactive-card__noactive');
        }
      } else {
        this.classList.add('interactive-card__active');
        interCardFull[i].classList.add('interactive-card__full--active');
        interCardContent[i].classList.add('interactive-card__content--active');
        if (screen.width < 1200) {
          interTitle[i].style.opacity = '0';
        }
        for (let j = 0; j < interCard.length; j++) {
          interCard[j].classList.add('interactive-card__noactive');
          this.classList.remove('interactive-card__noactive');
        }
      }
    }
  }
  
  let burger = document.querySelector('.header-burger');
  let burgerLine = document.querySelectorAll('.burger-line');
  let menu = document.querySelector('.burger-menu');
  let burgerClose = document.querySelector('.burger-close');
  function fClick() {
    if (screen.width < 767) {
      let sumClose = (screen.width - 280) / 2;
      console.log(sumClose);
      menu.style.left = '0';
      burger.style.zIndex = '0';
      burgerClose.style.right = sumClose + 'px';
    } else {
      menu.style.right = '0';
      burger.style.zIndex = '0';
    }
  }
  burgerClose.onclick = function () {
    if (screen.width < 767) {
      menu.style.left = 'auto';
      menu.style.right = '-100vw';
      burger.style.zIndex = '999';
    } else {
      menu.style.right = '-330px';
      burger.style.zIndex = '999';
    }
  }
  
  burger.onclick = fClick;
  burger.ontouchenter = fClick;
  for (let i = 0; i < burgerLine.length; i++) {
    burgerLine[i].onclick = fClick;
    burgerLine[i].ontouchenter = fClick;
  }
  
  let popupBtn = document.querySelector('.hero-btn');
  let popup = document.querySelector('.popup');
  let popupClose = document.querySelector('.popup-close');
  popupBtn.onclick = function () {
    popup.style.display = 'flex';
    popup.scrollIntoView({ block: "start", behavior: "smooth" });
    setTimeout(() => popup.style.opacity = '1', 100);
  }
  popupClose.onclick = function () {
    popup.style.opacity = '0';
    document.querySelector('html').style.overflowY = 'auto';
    setTimeout(() => popup.style.display = 'none', 700);
  }
  
  
  let projectBtn = document.querySelector('.project-profile__btn');
  let quiz = document.querySelector('.quiz');
  let quizNum = document.querySelectorAll('.quiz-container');
  let quizClose = document.querySelectorAll('.quiz-close');
  let btnNext = document.querySelectorAll('.quiz-bottom__btn--next');
  let btnPrev = document.querySelectorAll('.quiz-bottom__btn--back');
  let quizCardImg = document.querySelectorAll('.quiz-card__img img');
  let quizCardDesc = document.querySelectorAll('.quiz-card__desc');
  
  for (let i = 0; i < quizCardImg.length; i++) {
    quizCardImg[i].onclick = function () {
      for (let j = 0; j < quizCardImg.length; j++) {
        quizCardImg[j].classList.remove('quiz-active');
        quizCardDesc[j].style.color = '#ffffff';
        quizCardDesc[j].style.fontWeight = '300';
      }
      this.classList.add('quiz-active');
      if (quizCardImg[0].classList.contains('quiz-active') === true) {
        localStorage.setItem('object', 'Квартира');
      } else if (quizCardImg[1].classList.contains('quiz-active') === true) {
        localStorage.setItem('object', 'Дом');
      } else if (quizCardImg[2].classList.contains('quiz-active') === true) {
        localStorage.setItem('object', 'Офис');
      } else if (quizCardImg[3].classList.contains('quiz-active') === true) {
        localStorage.setItem('object', 'Другое');
      } else if (quizCardImg[4].classList.contains('quiz-active') === true) {
        localStorage.setItem('working', 'Ремонт еще не начат');
      } else if (quizCardImg[5].classList.contains('quiz-active') === true) {
        localStorage.setItem('working', 'Ремонт начат, провода уже проложены');
      } else if (quizCardImg[6].classList.contains('quiz-active') === true) {
        localStorage.setItem('design', 'Отсутствует');
      } else if (quizCardImg[7].classList.contains('quiz-active') === true) {
        localStorage.setItem('design', 'В процессе создания');
      } else if (quizCardImg[8].classList.contains('quiz-active') === true) {
        localStorage.setItem('design', 'Уже готов');
      } else if (quizCardImg[9].classList.contains('quiz-active') === true) {
        localStorage.setItem('city', 'Ташкент');
      } else if (quizCardImg[10].classList.contains('quiz-active') === true) {
        localStorage.setItem('city', 'Другой');
      } else if (quizCardImg[11].classList.contains('quiz-active') === true) {
        localStorage.setItem('city', 'Другой');
      }
      quizCardDesc[i].style.color = '#FF7819';
      quizCardDesc[i].style.fontWeight = '500';
    }
  }
  
  projectBtn.onclick = function () {
    document.getElementsByTagName('body')[0].style.position = 'fixed';
    if (screen.width < 768) {
      quiz.style.display = 'block';
    } else {
      quiz.style.display = 'flex';
    }
  }
  
  for (let i = 0; i < btnNext.length; i++) {
    btnNext[i].onclick = function () {
      for (let j = 0; j < quizCardImg.length; j++) {
        if (quizCardImg[j].classList.contains('quiz-active') == true) {
          quizCardImg[j].classList.remove('quiz-active');
          quizCardDesc[j].style.color = '#ffffff';
          quizCardDesc[i].style.fontWeight = '300';
          quizNum[i].style.display = 'none';
          quizNum[i + 1].style.display = 'flex';
        }
      }
      if (quizNum[4].style.display == 'flex') {
        let formObject = document.querySelector('input[name="object"]');
        let formWorking = document.querySelector('input[name="working"]');
        let formDesign = document.querySelector('input[name="design"]');
        let formCity = document.querySelector('input[name="city"]');
        formObject.value = 'Тип объекта: ' + localStorage.getItem('object');
        formWorking.value = 'Стадия работы на объекте: ' + localStorage.getItem('working');
        formDesign.value = 'Дизайн-проект объекта: ' + localStorage.getItem('design');
        formCity.value = localStorage.getItem('city');
      }
    }
  }
  
  let pp = document.querySelector('.project-profile');
  
  for (let i = 0; i < btnPrev.length; i++) {
    btnPrev[i].onclick = function () {
      quizNum[i + 1].style.display = 'none';
      quizNum[i].style.display = 'flex';
    }
  }
  
  for (let i = 0; i < quizClose.length; i++) {
    quizClose[i].onclick = function () {
      quiz.style.display = 'none';
      document.getElementsByTagName('body')[0].style.position = 'relative';
      pp.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
  
  
  
  function maskPhone(selector, masked = '+998 (__) ___-__-__') {
    const elems = document.querySelectorAll(selector);
  
    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
        this.value = "";
      }
  
    }
  
    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  
  }
  
  
  
  document.body.addEventListener('click', (e) => {
    let target = e.target;
    if (target.className == 'burger-menu' || target.className == 'burger-link__href' || target.className == 'header-burger') {
      return;
    }
    menu.style.right = '-330px';
    if (screen.width < 767) {
      menu.style.right = '-100vw';
    }
  });
  
  
  let formCity = document.querySelectorAll('.input[name="userCity"]');
  let listCity = document.querySelectorAll('.list-city');
  let listLi = document.querySelectorAll('.list-city li');
  let in7 = document.querySelectorAll('.input-7');
  for (let i = 0; i < formCity.length; i++) {
    formCity[i].style.zIndex = '999';
    formCity[i].onclick = function () {
      if (listCity[i].style.opacity === '1') {
        listCity[i].style.opacity = '0';
        listCity[i].style.zIndex = '-1';
        in7[i].classList.remove('input-6');
        in7[i].classList.add('input-5');
      } else {
        listCity[i].style.opacity = '1';
        listCity[i].style.zIndex = '999';
        in7[i].classList.add('input-6');
        in7[i].classList.remove('input-5');
        function li1() {
          formCity[i].value = 'Ташкент';
          listCity[i].style.opacity = '0';
          listCity[i].style.zIndex = '-1';
          in7[i].classList.add('input-5');
          in7[i].classList.remove('input-6');
        }
        function li2() {
          formCity[i].value = 'Другой';
          listCity[i].style.opacity = '0';
          listCity[i].style.zIndex = '-1';
          in7[i].classList.add('input-5');
          in7[i].classList.remove('input-6');
        }
        function li3() {
          formCity[i].value = 'Другой';
          listCity[i].style.opacity = '0';
          listCity[i].style.zIndex = '-1';
          in7[i].classList.add('input-5');
          in7[i].classList.remove('input-6');
        }
        listLi[0].onclick = li1;
        listLi[1].onclick = li2;
        listLi[2].onclick = li3;
  
        listLi[3].onclick = li1;
        listLi[4].onclick = li2;
        listLi[5].onclick = li3;
  
        listLi[6].onclick = li1;
        listLi[7].onclick = li2;
        listLi[8].onclick = li3;
  
        listLi[9].onclick = li1;
        listLi[10].onclick = li2;
        listLi[11].onclick = li3;
      }
    }
  }
  
  
  const anchors = document.querySelectorAll('a[href*="#"]')
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
  
      const blockID = anchor.getAttribute('href').substr(1)
  
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  
  
  
  document.querySelectorAll('img.svg').forEach(img => {
    var imgId = img.id;
    var imgClass = img.className;
    var imgURL = img.src;
    var imgFill = img.getAttribute('data-fill');
  
    fetch(imgURL).then(r => r.text()).then(text => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(text, "text/xml");
      var svg = xmlDoc.getElementsByTagName('svg')[0];
  
      if (typeof imgId !== 'undefined') {
        svg.setAttribute('id', imgId);
      }
  
      if (typeof imgClass !== 'undefined') {
        svg.setAttribute('class', imgClass);
      }
  
      if (typeof imgFill !== 'undefined') {
        svg.setAttribute('fill', imgFill);
      }
  
      img.parentNode.replaceChild(svg, img);
  
    }).catch(console.error);
  
  });
  
  
  let alisaAnimate = document.querySelector('.alisa-right');
  let ya1 = document.querySelector('.alisa-t1');
  let ya2 = document.querySelector('.alisa-t2');
  let phoneAnimate = document.querySelector('.application-left img');
  
  window.onscroll = function () {
    if ((window.pageYOffset + 200) >= alisaAnimate.offsetTop) {
      ya1.style.opacity = '1';
      ya2.style.opacity = '1';
    } else {
      ya1.style.opacity = '0';
      ya2.style.opacity = '0';
    }
    if (screen.width < 768) {
      let aSec = document.querySelector('.main-four');
      let tap = document.querySelector('.tap');
      let iCard = document.querySelectorAll('.interactive-card');
      if (aSec.offsetTop <= window.pageYOffset && iCard[3].offsetTop > window.pageYOffset) {
        tap.style.opacity = '1';
      } else {
        tap.style.opacity = '0';
      }
    }
    /* if ((window.pageYOffset + 250) >= phoneAnimate.offsetTop) {
      phoneAnimate.src = 'img/phone1.png';
      phoneAnimate.style.width = '368px';
      phoneAnimate.style.marginRight = '0';
    } else {
      phoneAnimate.src = 'img/xm.png';
      phoneAnimate.style.width = '265px';
      phoneAnimate.style.marginRight = '35px';
    } */
  }
  
  if (screen.width < 768) {
    let p1 = document.querySelector('.about-card-mb-1');
    let p2 = document.querySelector('.about-card-mb-21');
    let p3 = document.querySelector('.about-card-mb-22');
    let p3Img = document.querySelector('.about-card-mb-22 img');
    let p2Img = document.querySelector('.about-card-mb-21 img');
    let p4 = document.querySelectorAll('.about-card-mb-4');
    let pad = (screen.width - 290) / 2;
    let pad2 = screen.width / 2 - 7;
    p1.style.marginLeft = '-' + pad + 'px';
    p2.style.marginLeft = '-' + pad + 'px';
    p3.style.marginRight = '-' + pad + 'px';
    p2.style.width = pad2 + 'px';
    p3.style.width = pad2 + 'px';
    p4[0].style.marginRight = '-' + pad + 'px';
    p4[1].style.marginRight = '-' + pad + 'px';
    p4[2].style.marginRight = '-' + pad + 'px';
    setTimeout(() => {
      pad3 = p3Img.clientHeight;
      p2Img.style.height = pad3 + 'px';
      p3Img.style.height = pad3 + 'px';
    }, 500);
  }