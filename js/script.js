function showForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
  }





function sendToTelegram() {
  var nameValue = document.getElementById("name").value;
  var phoneValue = document.getElementById("phone").value;
  var telegramURL = "https://api.telegram.org/bot<ваш_токен>/sendMessage?chat_id=<ID_чата>&text=" + encodeURIComponent("Имя: " + nameValue + ", Номер телефона: " + phoneValue);
  window.location.href = telegramURL;
}
</script>







// function sendToLink() {
//   var nameValue = document.getElementById("name").value;
//   var phoneValue = document.getElementById("phone").value;
//   var link = "https://api.telegram.org/bot6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage?chat_id=191899857&text=name=" + nameValue + "&phone=" + phoneValue;
//   window.location.href = link;
// }



// function sendToLink() {
//   var nameValue = document.getElementById("name").value;
//   var phoneValue = document.getElementById("phone").value;
//   var url = "https://api.telegram.org/bot6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage?chat_id=191899857&text=Имя: " + nameValue + ", Номер телефона: " + phoneValue;
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.send();
// }
