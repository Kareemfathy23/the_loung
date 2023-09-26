function sendwhatsapp(){
  var phonenumber = "+201006355381";

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var message = document.querySelector(".message").value;

  var url = "https://wa.me/" + phonenumber + "?text="
  +"*Name :* "+name+"%0a"
  +"*Email :* "+email+"%0a"
  +"*Message :* "+message
  +"%0a%0a";

  window.open(url, '_blank').focus();
}

