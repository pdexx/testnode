import _ from 'lodash'; //用ES6語法導入模組

export default function(){
    var el = document.querySelector('#module-2');
    el.textContent = _.join(['Module', '2'], ' ');
}