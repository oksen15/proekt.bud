function showForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
  }





function sendToLink() {
  var nameValue = document.getElementById("name").value;
  var phoneValue = document.getElementById("phone").value;
  var link = "https://api.telegram.org/bot6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage?chat_id=191899857&text=name=" + nameValue + "&phone=" + phoneValue;
  window.location.href = link;
}
