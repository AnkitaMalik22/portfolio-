import { proxy } from 'valtio';

function toggleDarkMode() {
    state.darkMode = !state.darkMode;
  }
function setLightBG(color){
  state.lightBG = color;
  state.darkBG = color;
}

function setActiveLink(num){
  state.activeLink=num;
}
  

const state = proxy({
darkMode: true,
toggleDarkMode,
setLightBG,
setActiveLink,
lightBG : '#7C3AED',
darkBG :'#7C3AED',
darkText :'text-white',
activeLink : 1
});

export default state;