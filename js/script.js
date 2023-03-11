function showForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
  }






  function sendMessage(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
  
    var url = `https://api.telegram.org/bot6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage?chat_id=191899857&text=${name}_${phone}`;
    
    location.href=url;

    
  }
