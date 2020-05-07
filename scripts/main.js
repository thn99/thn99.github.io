/**
 * Initializing GTM
 */
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-N3G5W8J");

/*

(function(){
  let firstLink = document.createElement("link");
  let firstScript = document.createElement("script");
  let secondScript = document.createElement("script");
  let thirdScript = document.createElement("script");

  firstLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
  firstLink.integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh";
  firstLink.crossOrigin = "anonymous";

  firstScript.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
  firstScript.integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
  firstScript.crossOrigin = "anonymous";

  secondScript.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
  secondScript.integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
  secondScript.crossOrigin = "anonymous";

  thirdScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
  thirdScript.integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
  thirdScript.crossOrigin = "anonymous";

  document.body.appendChild(firstLink);
  document.body.appendChild(firstScript);
  document.body.appendChild(secondScript);
  document.body.appendChild(thirdScript);
})();

*/


/**
 * GTAG Code
 *  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-151996084-1');
    </script> -->
 */

window.purchaseItems = window.purchaseItems || [];

function inject() {
  let id = document.querySelector("#gtmId").value;
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", id);
}

function load() {
  let s = document.createElement("script");
  s.src = document.querySelector("#scriptSrc").value;
  s.async = document.querySelector("#scriptAsync").value;
  console.log(document.querySelector("#scriptSrc").value);
  document.body.appendChild(s);
}

function appendLink(){
  let tbodyLink = document.getElementById("linkArea");
  let link = document.createElement("a");
  let colum = document.createElement("tr");
  let row = document.createElement("td");
  link.href = 'https://' + document.getElementById("url").value;
  link.innerText = link.href + '\n';
  row.scope = 'row';
  row.append(link);
  colum.append(row);
  tbodyLink.append(colum);
  console.log(link.href)
}

function addToCart(){
  let tbodyLink = document.getElementById("productArea");
  let prodId = document.getElementById("productId").value;
  let prodName = document.getElementById("productName").value;
  let prodPrice = Number(document.getElementById("productPrice").value);
  let prodQuantity = Number(document.getElementById("productQuantity").value);
  
  let productId = document.createElement("td");
  let productName = document.createElement("td");
  let productPrice = document.createElement("td");
  let productQuantity = document.createElement("td");
  let column = document.createElement("tr");

  productId.innerText = prodId;
  productName.innerText = prodName;
  productPrice.innerText = prodPrice;
  productQuantity.innerText = prodQuantity;

  column.append(productId);
  column.append(productName);
  column.append(productPrice);
  column.append(productQuantity);
  tbodyLink.append(column);
  
  dataLayer.push({
    event: 'Add To Cart',
    id: prodId,
    name: prodName,
    price: prodPrice,
    quantity: prodQuantity
  });
  purchaseItems.push({
    id: prodId,
    name: prodName,
    price: prodPrice,
    quantity: prodQuantity
  });
}

function purchase(){
  window.dataLayer = window.dataLayer || [];
  let transactionId = document.getElementById("transactionId").innerText;
  let revenue = purchaseItems.reduce((acc, prod) =>  acc += prod.price * prod.quantity, 0);
  dataLayer.push({
    event: 'purchaseReady',
    ecommerce: {
      purchase: {
        actionField: {
          id: transactionId,
          revenue: revenue,
        },
        products: purchaseItems
      }
    }
  });
  purchaseItems = [];
  createTransactionId();
}

function createTransactionId(){
  document.getElementById("transactionId").textContent = Date.now();
}

let normal = {
  tab0: ["Caros amigos, ", "Por outro lado, ", "Assim mesmo, ", "No entanto, n\xe3o podemos esquecer que ", "Do mesmo modo, ", "A pr\xe1tica cotidiana prova que ", "Nunca \xe9 demais lembrar o peso e o significado destes problemas, uma vez que ", "As experi\xeancias acumuladas demonstram que ", "Acima de tudo, \xe9 fundamental ressaltar que ", "O incentivo ao avan\xe7o tecnol\xf3gico, assim como ", "N\xe3o obstante, ", "Todas estas quest\xf5es, devidamente ponderadas, levantam d\xfavidas sobre se ", "Pensando mais a longo prazo, ", "O que temos que ter sempre em mente \xe9 que ", "Ainda assim, existem d\xfavidas a respeito de como ", "Gostaria de enfatizar que ", "Todavia, ", "A n\xedvel organizacional, ", "O empenho em analisar ", "Percebemos, cada vez mais, que ", "No mundo atual, ", "\xc9 importante questionar o quanto ", "Neste sentido, ", "Evidentemente, ", "Por conseguinte, ", "\xc9 claro que ", "Podemos j\xe1 vislumbrar o modo pelo qual ", "Desta maneira, ", "O cuidado em identificar pontos cr\xedticos n", "A certifica\xe7\xe3o de metodologias que nos auxiliam a lidar com "], 
  tab1: ["a execu\xe7\xe3o dos pontos do programa ", "a complexidade dos estudos efetuados ", "a cont\xednua expans\xe3o de nossa atividade ", "a estrutura atual da organiza\xe7\xe3o ", "o novo modelo estrutural aqui preconizado ", "o desenvolvimento cont\xednuo de distintas formas de atua\xe7\xe3o ", "a constante divulga\xe7\xe3o das informa\xe7\xf5es ", "a consolida\xe7\xe3o das estruturas ", "a consulta aos diversos militantes ", "o in\xedcio da atividade geral de forma\xe7\xe3o de atitudes ", "o desafiador cen\xe1rio globalizado ", "a mobilidade dos capitais internacionais ", "o fen\xf4meno da Internet ", "a hegemonia do ambiente pol\xedtico ", "a expans\xe3o dos mercados mundiais ", "o aumento do di\xe1logo entre os diferentes setores produtivos ", "a crescente influ\xeancia da m\xeddia ", "a necessidade de renova\xe7\xe3o processual ", "a competitividade nas transa\xe7\xf5es comerciais ", "o surgimento do com\xe9rcio virtual ", "a revolu\xe7\xe3o dos costumes ", "o acompanhamento das prefer\xeancias de consumo ", "o comprometimento entre as equipes ", "a determina\xe7\xe3o clara de objetivos ", "a ado\xe7\xe3o de pol\xedticas descentralizadoras ", "a valoriza\xe7\xe3o de fatores subjetivos ", "a percep\xe7\xe3o das dificuldades ", "o entendimento das metas propostas ", "o consenso sobre a necessidade de qualifica\xe7\xe3o ", "o julgamento imparcial das eventualidades "], 
  tab2: ["nos obriga \xe0 an\xe1lise ", "cumpre um papel essencial na formula\xe7\xe3o ", "exige a precis\xe3o e a defini\xe7\xe3o ", "auxilia a prepara\xe7\xe3o e a composi\xe7\xe3o ", "garante a contribui\xe7\xe3o de um grupo importante na determina\xe7\xe3o ", "assume importantes posi\xe7\xf5es no estabelecimento ", "facilita a cria\xe7\xe3o ", "obstaculiza a aprecia\xe7\xe3o da import\xe2ncia ", "oferece uma interessante oportunidade para verifica\xe7\xe3o ", "acarreta um processo de reformula\xe7\xe3o e moderniza\xe7\xe3o ", "pode nos levar a considerar a reestrutura\xe7\xe3o ", "representa uma abertura para a melhoria ", "ainda n\xe3o demonstrou convincentemente que vai participar na mudan\xe7a ", "talvez venha a ressaltar a relatividade ", "prepara-nos para enfrentar situa\xe7\xf5es at\xedpicas decorrentes ", "maximiza as possibilidades por conta ", "desafia a capacidade de equaliza\xe7\xe3o ", "agrega valor ao estabelecimento ", "\xe9 uma das consequ\xeancias ", "promove a alavancagem ", "n\xe3o pode mais se dissociar ", "possibilita uma melhor vis\xe3o global ", "estimula a padroniza\xe7\xe3o ", "aponta para a melhoria ", "faz parte de um processo de gerenciamento ", "causa impacto indireto na reavalia\xe7\xe3o ", "apresenta tend\xeancias no sentido de aprovar a manuten\xe7\xe3o ", "estende o alcance e a import\xe2ncia ", "deve passar por modifica\xe7\xf5es independentemente ", "afeta positivamente a correta previs\xe3o "], 
  tab3: ["das condi\xe7\xf5es financeiras e administrativas exigidas.", "das diretrizes de desenvolvimento para o futuro.", "do sistema de participa\xe7\xe3o geral.", "das posturas dos \xf3rg\xe3os dirigentes com rela\xe7\xe3o \xe0s suas atribui\xe7\xf5es.", "das novas proposi\xe7\xf5es.", "das dire\xe7\xf5es preferenciais no sentido do progresso.", "do sistema de forma\xe7\xe3o de quadros que corresponde \xe0s necessidades.", "das condi\xe7\xf5es inegavelmente apropriadas.", "dos \xedndices pretendidos.", "das formas de a\xe7\xe3o.", "dos paradigmas corporativos.", "dos relacionamentos verticais entre as hierarquias.", "do processo de comunica\xe7\xe3o como um todo.", "dos m\xe9todos utilizados na avalia\xe7\xe3o de resultados.", "de todos os recursos funcionais envolvidos.", "dos n\xedveis de motiva\xe7\xe3o departamental.", "da gest\xe3o inovadora da qual fazemos parte.", "dos modos de opera\xe7\xe3o convencionais.", "de alternativas \xe0s solu\xe7\xf5es ortodoxas.", "dos procedimentos normalmente adotados.", "dos conhecimentos estrat\xe9gicos para atingir a excel\xeancia.", "do fluxo de informa\xe7\xf5es.", "do levantamento das vari\xe1veis envolvidas.", "das diversas correntes de pensamento.", "do impacto na agilidade decis\xf3ria.", "das regras de conduta normativas.", "do or\xe7amento setorial.", "do retorno esperado a longo prazo.", "do investimento em reciclagem t\xe9cnica.", "do remanejamento dos quadros funcionais."]
};

let psico = {
  tab0: ["De acordo com a segunda t\xf3pica freudiana, ", "A doutrina de Lacan sobre o RSI diz que ", "Freud, em correspond\xeancia a Jung, cita que ", "\xc9 imperioso ressaltar que ", "A cl\xednica mostra que o in\xedcio do tratamento ", "Cada inconsciente relativo confunde-se, por meio de uma redu\xe7\xe3o operacional, com ", "Quando dizemos ao paciente que certa imagem sua significa outra coisa, ", "Ao mesmo tempo e de maneira sim\xe9trica, ", "Freud disse que ", "Lacan dir\xe1 que ", "N\xe3o fosse uma claudica\xe7\xe3o, ", "A exterioridade que vige no mais \xedntimo de n\xf3s mesmos, carrega ", "O assujeitamento ao Outro reprime ", "A psican\xe1lise parte da id\xe9ia de que ", "Enquanto conceito psicanal\xedtico, ", "O desejo portanto, ", "O sonho \xe9 a realiza\xe7\xe3o de um desejo que ", "A puls\xe3o \xe9 o elo entre o som\xe1tico e o ps\xedquico onde ", "Assim, ", "Por outro lado, ", "Do mesmo modo, ", "Ora, ", "Podemos descrever, assim, ", "N\xe3o hesitamos em comparar que ", "Compreendemos cedo que ", "N\xe3o conseguindo descartar complexos pessoais, ", "Mais al\xe9m do princ\xedpio de prazer, ", "N\xe3o-todo f\xe1lico, "],
  tab1: ["o n\xf3 borromeano que amarra a triparti\xe7\xe3o estrutural dos registros real, simb\xf3lico e imagin\xe1rio ", "a onipresen\xe7a das fantasias subjacentes ", "os processos on\xedricos \u2014 e, por extens\xe3o, todo o inconsciente \u2014 ", "o movimento da puls\xe3o esc\xf3pica ", "o estado amoroso na hipnose ", "o limite te\xf3rico das ruturas de campo interpretativas ", "a nossa subjetiva\xe7\xe3o ", "o pai tot\xeamico da horda primeva ", "o rep\xfadio ao feminino ", "o recalque da enuncia\xe7\xe3o ", "o desejo inconsciente ", "o del\xedrio ligado \xe0 produ\xe7\xe3o de um certo saber, ", "a aus\xeancia de autoridade ", "uma parte valiosa e bem dotada da sociedade ", "um exaltado sem organiza\xe7\xe3o e nem disciplina ", "o princ\xedpio suscet\xedvel que serve de base ", "a tend\xeancia sexual inibida ", "a foraclus\xe3o do significante do Nome-do-Pai ", "o polo hostil da ambival\xeancia afetiva do complexo paterno ", "o inconsciente estruturado como linguagem ", "a puls\xe3o esc\xf3pica ", "o ass\xe9dio das grandes necessidades orgi\xe2nicas ", "a defesa frente \xe0 inexorabilidade do real "],
  tab2: ["\xe9 o ponto de funda\xe7\xe3o de nosso pr\xf3prio desejo ", "aferra o desejo \xe0 Coisa ", "opera n\xe3o per via di porre, e sim per via di levare ", "modifica a interven\xe7\xe3o ", "j\xe1 est\xe1 impl\xedcito no uso contempor\xe2neo da interpreta\xe7\xe3o transferencial ", "produz uma marca ps\xedquica ", "vela a enuncia\xe7\xe3o ", "recusa a castra\xe7\xe3o ", "constr\xf3i um del\xedrio ", "denega a natureza do sofrimento ", "realiza a travessia da fantasia ", "contribui para a coloca\xe7\xe3o em cena ", "fornece a dimens\xe3o te\xf3rica ", "se acompanha ent\xe3o de inconvenientes n\xe3o negligenci\xe1veis ", "foraclui o ponto de funda\xe7\xe3o ", "se vale da tradu\xe7\xe3o metaf\xf3rica do material "],
  tab3: ["sem que isso impe\xe7a a extra\xe7\xe3o de gozo.", "que delimita o campo de interven\xe7\xe3o do analista ", "que termina por transformar o objeto em uma inst\xe2ncia paran\xf3ica.", "que leva \xe0 converg\xeancia no recalque.", "cujos efeitos produzem o recalque desta mesma etilogia sexual da neurose.", "que faz com que o sujeito se constitua no campo do Outro.", "cujo o eu n\xe3o \xe9 senhor em sua pr\xf3pria casa.", "quando a ang\xfastia \xe9 sem objeto.", "que n\xe3o h\xe1 Outro do Outro.", "que n\xe3o h\xe1 metalinguagem.", "que n\xe3o h\xe1 rela\xe7\xe3o sexual.", "que a Mulher n\xe3o existe.", "que define o modo de rela\xe7\xe3o do sujeito com o seu sofrimento.", "cuja resist\xeancia \xe9 sempre do analista", 'da nostalgia da suposta presen\xe7a da "Coisa" que teria nos salvado do desamparo.', "que supostamente nos faria pleno.", "que deixa brotar de si o Homem Psicanal\xedtico.", "revelando-se por fim que o sofrimento em si mesmo \xe9 um gozo"]
};

let tech = {
  tab0: ["Fala pro cliente que ", "Com este commit, ", "Nesse pull request, ", "Dado o fluxo de dados atual, ", "Explica pro Product Onwer que ", "Desde ontem a noite ", "A equipe de suporte precisa saber que "],
  tab1: ["a normaliza\xe7\xe3o da data ", "um erro n\xe3o identificado ", "o gerenciador de depend\xeancias do frontend ", "o m\xf3dulo de recurs\xe3o paralela ", "a otimiza\xe7\xe3o de performance da renderiza\xe7\xe3o do DOM ", "a disposi\xe7\xe3o dos elementos HTML ", "a compila\xe7\xe3o final do programa ", "o deploy automatizado no Heroku ", "o \xfaltimo pull request desse SCRUM "],
  tab2: ["deletou todas as entradas ", "otimizou a renderiza\xe7\xe3o ", "causou o bug ", "corrigiu o bug ", "superou o desempenho ", "complexificou o merge ", "facilitou a resolu\xe7\xe3o de conflito ", "causou a race condition "], 
  tab3: ["do nosso servidor de DNS.", "do polimorfismo aplicado nas classes.", "do fluxo de dados de forma retroativa no server.", "de estados est\xe1ticos nos componentes da UI.", "do JSON compilado a partir de proto-buffers.", "de uma compila\xe7\xe3o com tempo acima da media.", "de uma configura\xe7\xe3o Webpack eficiente nos builds.", "da execu\xe7\xe3o parelela de fun\xe7\xf5es em multi-threads.", "de compila\xe7\xe3o multi-plataforma de forma asincrona.", "da execu\xe7\xe3o de requisi\xe7\xf5es effcientes na API.", "na estabilidade do protocolo de transfer\xeancia de dados.", "do carregamento de JSON delimitado por linhas.", "na interpola\xe7\xe3o din\xe2mica de strings.", "no parse retroativo do DOM.", "no fechamento autom\xe1tico das tags.", "na compila\xe7\xe3o de templates literais.", "na defini\xe7\xe3o de variaveis com tipos est\xe1ticos.", "da renderiza\xe7\xe3o de floats parciais.", "na organiza\xe7\xe3o alfanum\xe9rico dos arrays multidimensionais", "dos parametros passados em fun\xe7\xf5es privadas.", "dos argumentos que definem um schema din\xe2mico.", "na cria\xe7\xe3o de novos polyfills para suportar os processos."]
};

function randomItem(arr) {
  const index = Math.floor(Math.random() *  (arr.length - 1))
  return arr[index]
}

function lerolero(obj) {
  let sentence = randomItem(obj.tab0) +
  randomItem(obj.tab1) +
  randomItem(obj.tab2) +
  randomItem(obj.tab3);
  document.getElementById("daily-reflection").innerText = '"' + sentence + '"';
}