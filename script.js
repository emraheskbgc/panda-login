let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = "left: 0.6em; top:0.6em";
  eyeR.style.cssText = "right: 0.6em; top:0.6em";
};
let normalHandStyle = () => {
  handL.style.cssText =
    "height:2.81em top:8.4em left:7.5em transform:rotate(0deg)";
  handR.style.cssText =
    "height:2.81em top:8.4em left:7.5em transform:rotate(0deg)";
};

//Kullanıcı adına dokununca

usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = "left:0.75em; top:1.12em;";
  eyeR.style.cssText = "right:0.75em; top:1.12em;";
  normalHandStyle();
});

//Şifreye Dokununca
passwordRef.addEventListener("focus", () => {
  handL.style.cssText =
    "height:6.56em; top:3.87em; left:11.75em; transform:rotate(-155deg);";
  handR.style.cssText =
    "height:6.56em; top:3.87em; right:11.75em; transform:rotate(155deg);";
  normalEyeStyle();
});

//kullanıcı adı ve şifre alanı dışına çıkınca
document.addEventListener("click", (e) => {
  let clickElem = e.target;
  if (clickElem != usernameRef && clickElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});
