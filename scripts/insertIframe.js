(function(){
    let ifr = document.createElement('iframe');
    ifr.height = '1px';
    ifr.width = '1px';
    ifr.src = top.window.location.href;
    document.body.appendChild(ifr);
})();