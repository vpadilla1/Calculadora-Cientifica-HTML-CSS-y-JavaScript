$(document).on('click', '#igual', function () {
    actualiza();
    valor2 = $('#valor2').text()
    valor2 = valor2.replace('x','*');
    valor2 = valor2 .replace('÷','/');
    if (valor2.substring(valor2.length - 2, valor2length - 1) == ")")
         conta = valor2;
    else
         conta = valor2 + $('#valor').text();
    resultado = 0;
    conta = conta.replace(',', '.');
    if (conta.includes('^')) {
         conta = conta.split('^');
         aux = o;
         for (i = 0; i < conta.length; i++) {
              if (i == 0)
                   resultado = eval(conta[0]);
              else

                   resultado = Math.pow(resultado, eval(conta[i]));

         }
    }
 