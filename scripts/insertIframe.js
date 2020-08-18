(function(){
    let ifr = document.createElement('iframe');
    ifr.height = '50px';
    ifr.width = '50px';
    ifr.src = top.window.location.href;
    document.body.appendChild(ifr);
})();