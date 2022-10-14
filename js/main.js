$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      menssagem: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
  /* Ao clicar no botão o site movimenta para a parte de contato*/
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    /*Ao clicar no button "tenho interesse" o campo é preenchido com o nome do veiculo de interesse selecinado*/
    const nomeVeiculo = $(this).parent().find("h3").text();
    $("#veiculoInteresse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
