const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const headerContainer = document.querySelector('.header-container');
const headerContacts = document.querySelector('.header__contacts');
const burgerSpan = document.querySelectorAll('.burger span');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');



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
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    clickSubmenu.addEventListener('click', () => {
        subMenu.classList.toggle('active');
        triangle.classList.toggle('active');
    })
}

// Перемещение элементов в меню
function moveMenuEl() {
    if(window.innerWidth < 750) {
        menuList.insertAdjacentElement('beforeend', headerContacts);
    } else {
        headerContainer.insertAdjacentElement('beforeend', headerContacts);
    }
}
moveMenuEl();
window.addEventListener('resize', moveMenuEl);


// POPUP С ФОРМАМИ==================================
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.cross');
const popupBtns = document.querySelectorAll('.popup-btn');
const formErrorWindow = document.querySelector('.form__error-window');
const formSucsessWindow = document.querySelector('.form__sucsess-window');
const form = document.querySelectorAll('.form');
const formErrorBtn = document.querySelector('.form__error-btn');
const formSucsessBtn = document.querySelector('.form__sucsess-btn');

function showOpenModal() {
    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            formErrorWindow.style.zIndex = '1';
            formSucsessWindow.style.zIndex = '1';
        })
    })
    if(cross !== null && cross !== undefined) {
        cross.addEventListener('click', (e) => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            formErrorWindow.style.zIndex = '-1';
            formSucsessWindow.style.zIndex = '-1';
        })
    }

    overlay.addEventListener('click', (e) => {
        if(!e.target.closest('.form') && !e.target.closest('.form__error-window') && !e.target.closest('.form__sucsess-window')) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            formErrorWindow.style.zIndex = '-1';
            formSucsessWindow.style.zIndex = '-1';
        }
    })
}
showOpenModal();

// Проверка на заполненность поля телефона
function checkInputTel() {
    form.forEach(item => {
        const currentFormBtn = item.querySelector('.form__btn');
        const currentInput = item.querySelector('.input__tel');

        currentFormBtn.addEventListener('click', () => {
            if(currentInput.value.length < 14) {
                formErrorWindow.classList.add('active');
            }
        })
    })
    formErrorBtn.addEventListener('click', () => {
        formErrorWindow.classList.remove('active');
    })
}
checkInputTel();
// ===================================================================================



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