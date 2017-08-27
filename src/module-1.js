import _ from 'lodash'; //用ES6語法導入模組

export default function(){
    var el = document.querySelector('#module-1');
    el.textContent = _.join(['Module', '1'], ' ');
}

export var n = 99999999;