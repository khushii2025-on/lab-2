const redSlider   = document.getElementById('red');    
const greenSlider = document.getElementById('green');  
const blueSlider  = document.getElementById('blue');   
const bodyEl      = document.body;                     
const hexOutput   = document.getElementById('hexValue'); 
const rgbOutput   = document.getElementById('rgbValue'); 


function rgbString(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function componentToHex(c) {
  const hex = c.toString(16).padStart(2, '0');
  return hex;
}
function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
}


function updateBackgroundFromSliders() {
  
  const r = Number(redSlider.value || 0);
  const g = Number(greenSlider.value || 0);
  const b = Number(blueSlider.value || 0);

  
  bodyEl.style.backgroundColor = rgbString(r, g, b);

  
  if (hexOutput) {
    hexOutput.textContent = rgbToHex(r, g, b);
  }
  if (rgbOutput) {
    rgbOutput.textContent = rgbString(r, g, b);
  }
}


function initColorSliders() {
  
  if (!redSlider || !greenSlider || !blueSlider) {
    
    console.error('Color sliders not found. Check ids: red, green, blue.');
    return;
  }

  
  redSlider.addEventListener('input', updateBackgroundFromSliders);
  greenSlider.addEventListener('input', updateBackgroundFromSliders);
  blueSlider.addEventListener('input', updateBackgroundFromSliders);

  
  updateBackgroundFromSliders();
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initColorSliders);
} else {
  initColorSliders();
}
