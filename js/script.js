 
function showForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
  }







function sendMessage(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
  
    var url = "https://api.telegram.org/6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage";
    var data = {
      chat_id: "-191899857",
      text: "Имя: " + name + "\nНомер телефона: " + phone
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  
    return false;
  }
