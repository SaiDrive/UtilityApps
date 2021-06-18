function display(input){
document.querySelector('#url').style.display = 'none';
document.querySelector('#base64').style.display = 'none';
document.querySelector('#md5').style.display = 'none';
document.querySelector('#sha1').style.display = 'none';
document.querySelector('#sha256').style.display = 'none';
document.querySelector('#sha512').style.display = 'none';
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
