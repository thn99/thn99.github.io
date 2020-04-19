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

function appendProduct(){
  let tbodyLink = document.getElementById("productArea");
  let prodId = document.getElementById("productId").value;
  let prodName = document.getElementById("productName").value;
  let prodPrice = Number(document.getElementById("productPrice").value);
  let prodQuantity = Number(document.getElementById("productQuantity").value);
  console.log(prodId, prodName, prodPrice, prodQuantity);
  let product = document.createElement("a");
  let column = document.createElement("tr");
  let row = document.createElement("td");
  product.innerText = prodId + " | " + prodName + " | " + prodPrice + " | " + prodQuantity  + '\n';
  row.scope = 'row';
  row.append(product);
  column.append(row);
  tbodyLink.append(column);
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
}

function transactionId(){
  document.getElementById("transactionId").textContent += Date.now();
}