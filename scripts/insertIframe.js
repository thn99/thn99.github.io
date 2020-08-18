(function(){
    let ifr = document.createElement('iframe');
    ifr.height = '800px';
    ifr.width = '600px';
    ifr.src = top.window.location.href;
    document.body.appendChild(ifr);
})();