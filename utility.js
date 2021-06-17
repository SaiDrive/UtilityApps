function display(input){
document.querySelector('#url').style.display = 'none';
document.querySelector('#base64').style.display = 'none';
document.querySelector('#md5').style.display = 'none';
document.querySelector('#sha1').style.display = 'none';
document.querySelector('#sha256').style.display = 'none';
document.querySelector('#sha512').style.display = 'none';
document.querySelector('#'+ input).style.display = 'block';
}