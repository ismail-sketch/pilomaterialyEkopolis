const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const headerContainer = document.querySelector('.header-container');
const headerContacts = document.querySelector('.header__contacts');
const burgerSpan = document.querySelectorAll('.burger span');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const headerJobGraphic = document.querySelector('.header__job-graphic')



burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menu.classList.remove('active');
        body.classList.remove('active');
    }
})

// sub-menu=======================
const subMenu = document.querySelector('.sub-menu');
const clickSubmenu = document.querySelector('.click-submenu');
const triangle = document.querySelector('.triangle');
const verticalLineLast = document.querySelector('vertical-line-last');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    clickSubmenu.addEventListener('click', () => {
        subMenu.classList.toggle('active');
        triangle.classList.toggle('active');
    })
}


// POPUP С ФОРМАМИ==================================
const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector('.overlay2');
const overlay3 = document.querySelector('.overlay3');
const cross = document.querySelector('.cross');
const popupBtns = document.querySelectorAll('.popup-btn');
const formErrorWindow = document.querySelector('.form__error-window');
const formSucsessWindow = document.querySelector('.form__sucsess-window');
const form = document.querySelectorAll('.form');
const formErrorBtn = document.querySelector('.form__error-btn');
const formSucsessBtn = document.querySelector('.form__sucsess-btn');
const footerFormBtn = document.querySelector('.footer__form-btn');

// Открытие закрытие модалки===========================
function showOpenModal() {
    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        })
    })
    if(cross !== null && cross !== undefined) {
        cross.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        })
    }

    overlay.addEventListener('click', (e) => {
        if(!e.target.closest('.form') && !e.target.closest('.form__error-window')
         && !e.target.closest('.form__sucsess-window') && !e.target.closest('.overlay2') && !e.target.closest('.overlay3')) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    })
}
showOpenModal();

// Открытие формы в зависимости от кнопки===================
const forms = Array.from(document.querySelectorAll('.form-wrp'));

function openFormDependeBtn() {
    window.addEventListener('click', (e) => {
        if(e.target.closest('.btn')) {
            forms.forEach(form => {
                form.classList.add('active');
            })
        }
        if(e.target.closest('.btn')) {
            forms.find(item => {
                if(item.dataset.modal == e.target.dataset.btn) {
                    item.classList.remove('active');
                }
            })
        }
    })
}
openFormDependeBtn();

// Проверка на заполненность поля телефона
function checkInputTel() {
    form.forEach(item => {
        const currentFormBtn = item.querySelector('.form__btn');
        const currentInput = item.querySelector('.input__tel');

        currentFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(currentInput.value.length < 14) {
                console.log(currentInput)
                formErrorWindow.classList.add('active');
                overlay2.classList.add('active');
            }
        })
    })
    formErrorBtn.addEventListener('click', () => {
        formErrorWindow.classList.remove('active');
        overlay2.classList.remove('active');
    })

    // Закрытие модалки ошибки по клику на её overlay2 или overlay3
    overlay2.addEventListener('click', (e) => {
        if(!e.target.closest('.form__error-window')) {
            overlay2.classList.remove('active');
            formErrorWindow.classList.remove('active');
        }
    })
}
checkInputTel();
// ===================================================================================

// SLIDER=======================================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

// ОТКРЫТИЕ-ЗАКРЫТИЕ БЛОКА С "ЧИТАТЬ ДАЛЕЕ..."
const aboutText3 = document.querySelector('.about__text3');
const aboutReadMoreBtn = document.querySelector('.about__read-more-btn');
const aboutReadHideBtn = document.querySelector('.about__read-hide-btn');


function hideShowText3() {
    if(aboutReadMoreBtn !== null) {
        aboutReadMoreBtn.addEventListener('click', () => {
            aboutText3.style.height = `${aboutText3.scrollHeight}px`;
            aboutReadHideBtn.classList.add('active');
            aboutReadMoreBtn.classList.add('active');
        })
    }
    if(aboutReadHideBtn !== null) {
        aboutReadHideBtn.addEventListener('click', () => {
            aboutText3.style.height = '';
            aboutReadHideBtn.classList.remove('active');
            aboutReadMoreBtn.classList.remove('active');
        })
    }
}
hideShowText3();


// Маска телефона
let maskCode = '+7 (___) ___-__-__'
let maskCode2 = '+38(___) ___ __ __'
function maskPhone(selector, masked = maskCode) {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		//console.log(template);
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
// use
maskPhone('.input-tel');