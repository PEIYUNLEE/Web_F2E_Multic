$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#loadani');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: false,
        path: '../json/cirlogo.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.addEventListener('DOMLoaded', loopanimate);

    function loopanimate() {
        openingAnim.playSegments([0, 41], true);
    }
    window.onload = function() {
        console.log(2)
        openingAnim.playSegments([0, 41], true);
        $('#load').css("display", "none");
        $('#load').css("transition", "1s");
    };
});