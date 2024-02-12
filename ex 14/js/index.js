function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas= [];

    //form.onsubit = function (evento) {
    //    evento.preventDefault();
    //    alert (1);
    //    console.log('Feito');
    //};


   // let contador=1
    function recebeEventoForm (evento) {
      evento.preventDefault();
     //   console.log(`Formulário não enviado ${contador}`);
    //  contador++;
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
      const idade = form.querySelector('.idade');

      pessoas.push ({
        nome : nome.value ,
        sobrenome : sobrenome.value ,
        peso : peso.value ,
        altura : altura.value ,
        idade : idade.value ,
      });

      console.log(pessoas);

      resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} ${idade.value} </p>`;

    };

    form.addEventListener('submit', recebeEventoForm);
        
};

meuEscopo();