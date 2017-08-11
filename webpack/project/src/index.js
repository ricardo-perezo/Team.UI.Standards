import _ from 'lodash';
import mycomponent from './mycomponent.js';
import './style.css';
import icon from './icon.png'
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('red')
  return element;
}

document.body.appendChild(component());
mycomponent.main();