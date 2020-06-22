function desplegar(info, infor){
if(document.getElementById(info).style.display=='block'){
document.getElementById(info).style.display='none';
document.getElementById(infor).innerHTML='<img src="img/info.png" id="infoi">información';}
else{document.getElementById(info).style.display='block';
document.getElementById(infor).innerHTML='<img src="img/info.png" id="infoi">información';}
}