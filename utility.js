function display(input){
document.querySelector('#url').style.display = 'none';
document.querySelector('#base64').style.display = 'none';
document.querySelector('#Hashing').style.display = 'none';
document.querySelector('#Rgb-Hex').style.display = 'none';
document.querySelector('#Hex-Rgb').style.display = 'none';
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
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
    document.querySelector('#Hex-output').value = `#${red}${green}${blue}`;
    
}

