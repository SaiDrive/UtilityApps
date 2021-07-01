function display(input){
document.querySelector('#url').style.display = 'none';
document.querySelector('#base64').style.display = 'none';
document.querySelector('#Hashing').style.display = 'none';
document.querySelector('#Rgb-Hex').style.display = 'none';
document.querySelector('#Hex-Rgb').style.display = 'none';
document.querySelector('#to-Epoch-converter').style.display = 'none';
document.querySelector('#to-human-readable-coverter').style.display = 'none';
document.querySelector('#temp-converter').style.display = 'none';
document.querySelector('#lang-translator').style.display = 'none';
document.querySelector('#number-base-converter').style.display = 'none';
document.querySelector('#string-utilities').style.display = 'none';

document.querySelector('#'+ input).style.display = 'block';
}
function encode(input){
    let text = document.querySelector('#'+input).value;
document.querySelector("#OutputUrl").value = encodeURIComponent(text);
}
function decode(input){
    let text = document.querySelector('#'+input).value;
    document.querySelector("#OutputUrl").value = decodeURIComponent(text);
}
function base64Encode(input){
    let text = document.querySelector('#'+input).value;
    document.querySelector('#OutputString').value = btoa(text);
}
function base64Decode(input){
    let text = document.querySelector('#'+input).value;
    document.querySelector('#OutputString').value = atob(text);
}

function hashing(){

    let option = document.querySelector('#hashSelect').value;
    let text = document.querySelector('#string-hashing-input').value;

switch(option){

    case "md5": document.querySelector('#string-hashing-output').value = window.CryptoJS.MD5(text);
    break;
    case "sha1": document.querySelector('#string-hashing-output').value = window.CryptoJS.SHA1(text);
    break;
    case "sha256": document.querySelector('#string-hashing-output').value = window.CryptoJS.SHA256(text);
    break;
    case "sha512": document.querySelector('#string-hashing-output').value = window.CryptoJS.SHA512(text);
    break;
        }
    }

function rgbToHex(){
    let red = document.querySelector('#redvalue').value;
    let green = document.querySelector('#greenvalue').value;
    let blue = document.querySelector('#bluevalue').value;
    let colorPreview = document.querySelector("#color-ouput").value;
  
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
    if(red === 0 || red < 10) {
        red = red +'0';
    } if(green === 0 || green < 10){
        green = green +'0';
    }
    if(blue === 0 || blue < 10){
        blue = blue +'0';
    }
    hexvalue = `#${red}${green}${blue}`;
    document.querySelector('#Hex-output').value = hexvalue;
    document.querySelector("#color-ouput").style.backgroundColor = hexvalue;
}

function hexToRGB(){
let hexValue = document.querySelector('#Hex-value').value;
hexValue = hexValue.split("#").pop();
if (hexValue.length != 6){
alert("Only six-digit hex colors are allowed.");
    }
else 
{
    let redValue = `${hexValue[0]}${hexValue[1]}`;
    let redHex = parseInt(redValue,16);
    let blueValue = `${hexValue[2]}${hexValue[3]}`;
    let blueHex = parseInt(blueValue,16);
    let greenValue = `${hexValue[4]}${hexValue[5]}`;
    let greenHex = parseInt(greenValue,16);
    let previewColor = document.querySelector("#Hex-color-ouput").value;
    document.querySelector('#hex-to-red').value = redHex;
    document.querySelector('#hex-to-green').value = blueHex;
    document.querySelector('#hex-to-blue').value = greenHex;
    document.querySelector('#Hex-color-ouput').style.backgroundColor = `#${hexValue}`;
    }
}

function toEpoch(){
    let year = document.querySelector('#year').value;
    let month = document.querySelector('#month').value;
    let day = document.querySelector('#day').value;
    let hours = document.querySelector('#hours').value;
    let minutes = document.querySelector('#minutes').value;
    let seconds = document.querySelector('#seconds').value;
    let humanToEpoch = new Date(Date.UTC(parseInt(year,10), parseInt(month,10)-1, parseInt(day,10), parseInt(hours,10), parseInt(minutes,10), parseInt(seconds,10)));
    document.querySelector('#epoch-output').value = humanToEpoch.getTime()/1000.0;
}

function toHumanDate(){
    const epoch = document.querySelector('#EpochValue').value;
    const humanDate = new Date(epoch*1000);
    document.querySelector('#Human-readable').value = humanDate;
}
