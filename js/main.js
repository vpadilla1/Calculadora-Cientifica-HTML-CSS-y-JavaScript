var vaiMudar = false, cont, valor, historico = Array(), memoria = Array(), fe = false, hyp=false; deg="deg";

function atualiza() {
    $(this).css('background-color', 'rgb(192,192,192)');
    valor = $('#valor').text();
    valor = valor.replace(',','.');
    setTimeout(function(){
        $('.col').css('background-color', 'rgb(240, 240, 240)');
        $('.numeros').css('background-color', 'rgb(250, 250, 250)');
    },100);
    $('.col').hover(function(){
        $(this).css('background-color', 'rgb(216,216,216)');
    }, function(){
        $(this).css('background-color', 'rgb(240,240,240)');
    });
    $('.numeros').hover(function(){
        $(this).css('background-color', 'rgb(216,216,216)');
    }, function(){
        $(this).css('background-color', 'rgb(250,250,250)');
    });
}

$ ( documento ) . on ( 'clic' ,  '.numeros' ,  function ( )  {
    atualiza ( ) ;
    si ( valor . longitud  <  15 )
        $ ( '#valor' ) . html ( valor == "0" || vaiMudar ? $ ( this ) . text ( ) . trim ( ) : ( valor + $ ( this ) . text ( ) . trim ( ) ) . replace ( '.' , ', ' ) ) ;
    vaiMudar  =  falso ;
} ) ;

$ ( documento ).on ( 'clic' ,  '.opp' ,  function ( )  {
    atualiza () ;
    if ( $ ( esto ).texto ( )  ==  "(" )
        $ ( '# valor2' ).html ( $ ( '# valor2' ).text ( ) + "" + $ ( esto ).text ( ) + "" ) ;
    más
        $ ( '# valor2' ).html ( $ ( '# valor2' ).text ( ) + $ ( '#valor' ).text ( )  +  "" + $ ( esto ).text ( ) + "" ) ;
    vaiMudar  =  verdadero ;
} ) ;

$ (document).on('click', '#ce', function()){
    atualiza();
    $('valor').html('0');
}

$ (document).on('click', '#c', function()){
    atualiza();
    $('valor').html('0');
    $('#valor2').html('');
}

$ (document).on('click', '#backspace', function()){
    atualiza () ;
    if( valor != "0"  &&  valor.length != 1 )
        $ ( '#valor' ).html ( valor.substring ( 0 ,  valor.length - 1 ).replace ( '.' , ',' ) ) ;
    else  if ( $ ( '#valor' ).text ( )  ==  ""  ||  $ ( '#valor' ).text ( )  ==  "-"  ||  valor . length  ==  1 )
        $ ( '#valor' ).html ( "0" ) ;
});

$ (document).on('click', '#xquad', function()){
    atualiza();
    xquad = Math.pow(parseFloat(valor),2);
    $('valor').html(xquad.toString().replace(',' , ','));
});

$ (document).on('click', '#elevado', function()){
    atualiza();
    $('valor2').html($('#valor2').text()+$('#valor').text() + " ^ ");
    vaiMudar = true;
});

$ (document).on('click', '#sen', function()){
    atualiza();
    sen = Math.sen(parseFloat(valor));
    $('valor').html(sen.toString().replace(',' , ','));
});

$ (document).on('click', '#cos', function()){
    atualiza();
    cos = Math.cos(parseFloat(valor));
    $('valor').html(cos.toString().replace(',' , ','));
});

$ (document).on('click', '#tan', function()){
    atualiza();
    tan = Math.tan(parseFloat(valor));
    $('valor').html(tan.toString().replace(',' , ','));
});

$ (document).on('click', '#cubo', function()){
    atualiza();
    xcubo = Math.pow(parseFloat(valor),3);
    $('valor').html(xcubo.toString().replace(',' , ','));
});

$(document).on('click', '#elevado', function()){
    atualiza();
    $('valor2').html($('#valor2').text()+$('#valor').text() + " yroot ");
});

$ (document).on('click', '#sen1', function()){
    atualiza();
    sen = Math.pow(Math.sen(parseFloat(valor)), -1);
    $('valor').html(sen.toString().replace(',' , ','));
});

$ (document).on('click', '#cos1', function()){
    atualiza();
    cos = Math.pow(Math.cos(parseFloat(valor)), -1);
    $('valor').html(cos.toString().replace(',' , ','));
});

$ (document).on('click', '#tan1', function()){
    atualiza();
    tan = Math.pow(Math.tan(parseFloat(valor)), -1);
    $('valor').html(tan.toString().replace(',' , ','));
});

$ (document).on('click', '#raiz', function()){
    atualiza();
    raiz = Math.sqrt(parseFloat(valor));
    $('valor').html(raiz.toString().replace(',' , ','));
});

$ (document).on('click', '#dezax', function()){
    atualiza();
    dezax = Math.pow(10, parseFloat(valor));
    $('valor').html(dezax.toString().replace(',' , ','));
});

$ (document).on('click', '#log', function()){
    atualiza();
    log = Math.log(parseFloat(valor));
    $('valor').html(log.toString().replace(',' , ','));
});

$ (document).on('click', '#exp', function()){
    atualiza();
    $('valor').html($('#valor').text() + ",e+");
});


$(document).on('click', '#elevado', function()){
    atualiza();
    $('valor2').html($('#valor2').text()+$('#valor').text() + " mod ");
    vaiMudar = true;
});


$(document).on('click', '#unsobre', function()){
    atualiza();
    unsobre = 1/parseFloat(valor);
    $('valor').html(unsobre.toString().replace(',' , ','));
});

$(document).on('click', '#eax', function()){
    atualiza();
    eax = Math.pow(2.71828182845904523, parseFloat(valor));
    $('valor').html(eax.toString().replace(',' , ','));
});

$(document).on('click', '#ln', function()){
    atualiza();
    ln = Math.log(parseFloat(valor)/Math.log(2.71828182845904523));
    $('valor').html(ln.toString().replace(',' , ','));
});

$(document).on('click', '#dms', function()){
    atualiza();
    dms = valor.split(',')[0]+ "," + (valor.split(',')[1]*6);
    $('valor').html(dms);
});

$(documento).on('clic' ,  '#deg' ,  function(){
    atualiza();
    valorSplit  =  valor.dividir ( '.' ) ;
    if ((valorSplit [1]*16 ).toString ().length  >  2 )
        grados  =  (parseInt (valorSplit[0]) + 1 ) + "," + ( valorSplit [ 1 ] * 1666666666 ).subcadena ( 1 ,  ( valorSplit [ 1 ] * 1666666666 ).toString ().length );
    más
        grados  =  valorSplit[0] + "," + ( valorSplit [ 1 ] * 1666666666 ) ;
    $ ('#valor').html (deg.toString ().replace ( '.' , ',' ) ) ;
});

$(documento).on('clic' ,  '#pi' ,  function(){
    atualiza();
    $('valor').html('3,141592653589793');
    vaiMudar = true;
});

$(documento).on('clic' ,  '#factorial' ,  function(){
    atualiza();
    if (valor < 0)
        fatorial  =  "Entrada Inválida" ;
    else  {
        var  fatorial  =  1 ;
        para (x = valor ;  x>1 ; x-)
            fatorial  =  fatorial * x ;
    }
    $ ('#valor').html(fatorial.toString().replace( '.' , ',' ));
});
