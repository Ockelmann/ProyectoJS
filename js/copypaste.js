//Desacrtivar la opcion de copiado y pegado por medio de jquery 
$("body").bind('cut copy paste',function(e){
    e.preventDefault();
})