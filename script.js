const generateBtn = document.querySelector('#generateButton');
const colorPalette = document.querySelector('.palette');
function generateColor() {
    const str = 'abcdfe0123456789';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * str.length)]
    }
    return color
};


function generatePalette() {
    colorPalette.innerHTML = '';
    for(let i = 0; i < 5; i++) {
         let colorHex = generateColor();
         let color = document.createElement('div');
         let span  = document.createElement('span');
         let hex  = document.createElement('b');
         let input  = document.createElement('input');
         input.name = 'color';
         input.value = colorHex;
         color.className = 'color';
         span.className = 'span';
         hex.className = 'b';
         color.appendChild(span);
         color.appendChild(hex);
         color.appendChild(input);
         colorPalette.appendChild(color);
         span.style.backgroundColor = colorHex;
         hex.innerHTML = colorHex;


         color.addEventListener('click', (e) => {
            let targetInput = e.target.parentNode.querySelector('input[name="color"]');
            targetInput.select();
            document.execCommand('copy');
            notification('Color ' + colorHex + ' Copied to your clipboard.')
        });
    }


};
generateBtn.addEventListener('click', generatePalette);

function notification(msg) {
    let oldAlert = document.querySelector('.alert');
    if(oldAlert) {
        oldAlert.parentNode.removeChild(oldAlert);
    }
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = msg;
    document.body.appendChild(alert);
    
    setTimeout(() => alert.classList.add('active'), 1);
    setTimeout(() => alert.classList.remove('active'), 1000);

};

window.addEventListener('keypress', (e) => {
    if(e.keyCode === 32){
        generatePalette();
    }
})

generatePalette();