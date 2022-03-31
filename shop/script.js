//const elements = [];
//var obsfucated = "MC0xLTItMy00";

function el_visible(el) {
    for (let i = 0; i < el.length; i++) {
        let element = document.getElementById(el[i]);
        element.classList.toggle('is-active');
    }
}

const elements = decode_list(getCookie("list"));
el_visible(elements);


function decode_list(obsfucated) {
    let list = atob(obsfucated);
    return list.split("-");
}

function encode_list() {
    let list = elements.join("-");
    return btoa(list);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

console.log(decode_list());