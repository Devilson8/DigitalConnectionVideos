// preparing language file
var aLangKeys = new Array();
aLangKeys["en"] = new Array();
aLangKeys["por"] = new Array();

aLangKeys["en"]["home"] = "Home";
aLangKeys["en"]["about"] = "About ";
aLangKeys["en"]["members"] = "Members";
aLangKeys["en"]["find_us"] = "Find Us";
aLangKeys["en"]["log_in"] = "Log In";
aLangKeys["en"]["sign_in"] = "Sign In";
aLangKeys["en"]["sec4Head"] = "STORIES, STYLE, AND MANY GOODS ";
aLangKeys["en"]["sec4Para"] =
  "Through success, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi.";
aLangKeys["en"]["compaHead"] = "Company";
aLangKeys["en"]["theTerm&Condi"] = "Terms and Conditions";
aLangKeys["en"]["thePriva&Poli"] = "Privacy and Policy";
aLangKeys["en"]["theContacts"] = "Contacts";
aLangKeys["en"]["theFollow"] = "Follow Us";
aLangKeys["en"]["theHelp"] = "Get Help";
aLangKeys["en"]["theFindUs"] = "Find Us";
aLangKeys["en"]["theFind1"] = "Find Us Here";
aLangKeys["en"]["sec3Head"] = "Forget the time live the process";

/*Tradução em Português*/

aLangKeys["por"]["home"] = "Resumo";
aLangKeys["por"]["about"] = "Sobre";
aLangKeys["por"]["members"] = "Membros";
aLangKeys["por"]["find_us"] = "Nos Encontre";
aLangKeys["por"]["log_in"] = "Assine";
aLangKeys["por"]["sign_in"] = "Assine Já";
aLangKeys["por"]["sec4Head"] = "HISTÓRIA, ESTILO, E TUDO DE BOM";
aLangKeys["por"]["sec4Para"] =
  "Por meio do sucesso, temos o poder de mudar vidas. Os esportes nos mantêm em forma. Eles nos mantêm atentos. Eles nos unem. Os atletas nos inspiram. Eles nos ajudam a nos levantar e nos mover. E os artigos esportivos com as tecnologias mais recentes nos ajudam a superar nosso recorde pessoal. A adidas é o lar do corredor, do jogador de basquete, do garoto do futebol, do entusiasta do fitness, do iogue.";
aLangKeys["por"]["compaHead"] = "Compania";
aLangKeys["por"]["theTerm&Condi"] = "Termos e Condições";
aLangKeys["por"]["thePriva&Poli"] = "Privacidade e Politíca";
aLangKeys["por"]["theContacts"] = "Contactos";
aLangKeys["por"]["theFollow"] = "Siga-nos";
aLangKeys["por"]["theHelp"] = "Ajuda";
aLangKeys["por"]["theFindUs"] = "Encontre-nos";
aLangKeys["por"]["theFind1"] = "Encontre-nos Aqui";
aLangKeys["por"]["sec3Head"] = "Esqueça o tempo viva o processo";

$(document).ready(function () {
  // onclick behavior
  $(".lang").click(function () {
    var lang = $(this).attr("id"); // obtain language id

    // translate all translatable elements
    $(".tr").each(function (i) {
      $(this).text(aLangKeys[lang][$(this).attr("key")]);
    });
  });
});
