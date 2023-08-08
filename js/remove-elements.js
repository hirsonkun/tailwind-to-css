const removeScript = document.getElementsByTagName("script");
for (let index = 0; index < removeScript.length; index++) {
  if (removeScript[index].src.includes("tailwindcss")) {
    console.log(removeScript[index].src + " script removed");
    removeScript[index].remove();
  }
}
// const logo = document.getElementsByTagName("img");
// for (let index = 0; index < logo.length; index++) {
//   if (logo[index].src.includes("logo-bag-bening.png")) {
//     console.log(logo[index].src + " replaced with logo.png");
//     logo[index].src = "logo.png";
//   }
// }
