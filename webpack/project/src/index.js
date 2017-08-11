import _ from 'lodash'
import mycomponent from './mycomponent.js'
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
mycomponent.main();