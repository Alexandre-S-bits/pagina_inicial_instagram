const $checkbox = document.querySelector('#switch');
const $html = document.querySelector('html')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode');
    if($checkbox.checked == true) {
        document.querySelector("body > div > div.instagram-continue > div:nth-child(1) > img").src="./img/instagram-logo-white.png" 
    }
    else {
        document.querySelector("body > div > div.instagram-continue > div:nth-child(1) > img").src="./img/instagram-logo.png" 
    }
 })

 