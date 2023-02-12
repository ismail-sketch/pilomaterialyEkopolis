// RANGE SLIDER FOR FILTER-PRICE
const rangeSlider = document.querySelectorAll('.rangeSlider');
rangeSlider.forEach(item => {
    if(item) {
        noUiSlider.create(item, {
          start: [100, 200],
          connect: true,
          range: {
              'min': 100,
              'max': 200
          },
          step: 1
        });

        const input0 = document.getElementById('input-price0');
        const input1 = document.getElementById('input-price1');
        const inputs = [input0, input1];

        const noUiHandleLower = document.querySelector('.noUi-handle-lower'); //правый ползунок
        const rangeRight = noUiHandleLower.getAttribute('aria-valuemax');


        item.noUiSlider.on('update', (values, handle) => {
          inputs[handle].value = Math.round(values[handle]);
          values[handle] = Math.round(inputs[handle].value);
        })

        function setRangeSlider(i, value) {
          let arr = [null, null];
          arr[i] = value;

          item.noUiSlider.set(arr);
        }

        inputs.forEach((item, i) => {
          item.addEventListener('change', (e) => {
            setRangeSlider(i, e.currentTarget.value);
          })
        })

      } //конец if(rangeSlider)
})


// Скрыть/показать фильтр
const filterForShowHide = document.querySelector('.filter-for-show-hide');
const catalogSidebarHeadFilter = document.querySelectorAll('.catalog__sidebar-head-filter')

if(catalogSidebarHeadFilter[1] && catalogSidebarHeadFilter[1] !== null) {
    catalogSidebarHeadFilter[1].addEventListener('click', () => {
        console.log('ic')
        filterForShowHide.classList.toggle('active');
    })
}


// ПЕРЕСТАНОВКА КАРТОЧЕК==========
const catalogCardsWrp = document.querySelector('.catalog__cards-wrp');
const sortImgDg1 = document.querySelector('.sort-img-bg1');
const sortImgDg2 = document.querySelector('.sort-img-bg2');
const catalogCardItem = document.querySelectorAll('.catalog__card-item');
const catalogCardTextWrp = document.querySelectorAll('.catalog__card-text-wrp');
const catalogCardBtn = document.querySelectorAll('.catalog__card-btn');

function moveCards() {
    if(sortImgDg1 !== null) {
        sortImgDg1.addEventListener('click', () => {
            catalogCardsWrp.classList.add('active');
            sortImgDg1.classList.add('active');
            sortImgDg2.classList.remove('active');

            catalogCardItem.forEach(item => {
                item.classList.add('active');
                item.classList.remove('active-for-anim');
            })

            catalogCardBtn.forEach(item => {
                item.classList.add('active');
            })

            catalogCardTextWrp.forEach(item => {
                item.classList.add('active');
            })
        })
    }

    if(sortImgDg2 !== null) {
        sortImgDg2.addEventListener('click', () => {
            catalogCardsWrp.classList.remove('active');
            sortImgDg1.classList.remove('active');
            sortImgDg2.classList.add('active');

            catalogCardItem.forEach(item => {
                item.classList.remove('active');
                item.classList.add('active-for-anim');
            })
            catalogCardBtn.forEach(item => {
                item.classList.remove('active');
            })
            catalogCardTextWrp.forEach(item => {
                item.classList.remove('active');
            })
        })
    }

}
moveCards();


$(document).ready(function(){
	$('.slider ul').bxSlider({
		pagerCustom: '.slider_pager ul',
		controls: true,
		auto: false,
		minSlides: 1,
		maxSlides: 1
	});
});
