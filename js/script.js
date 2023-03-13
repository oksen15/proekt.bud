function showForm() {
    var form = document.getElementById("myForm");
    form.style.display = "block";
  }




 function sendMessage() {
    var nameValue = document.getElementById("name").value;
    var phoneValue = document.getElementById("phone").value;
    
    // Формируем URL для отправки запроса на сервер Телеграма
    var url = `https://api.telegram.org/bot6196812518:AAHCIQdfWE1Pu-Ei2B5avacL_pg5OcA5OM0/sendMessage`;
    
    // Формируем тело запроса
    var data = new FormData();
    data.append('chat_id', '191899857');
    data.append('text', `Имя: ${nameValue}\nТелефон: ${phoneValue}`);
    
    // Отправляем POST-запрос на сервер Телеграма с помощью библиотеки axios
    axios.post(url, data)
      .then(function (response) {
        console.log(response);
        window.close(); 
      })
      .catch(function (error) {
        console.log(error);
      });

      function closeForm() {
        document.getElementsByTagName('form')[0].style.display = 'none';
      }

      closeForm();
  }





