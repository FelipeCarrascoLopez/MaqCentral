
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  document.addEventListener("DOMContentLoaded", function() {
    var whatsappIcon = document.getElementById("whatsappIcon");
    var whatsappNumber = document.getElementById("whatsappNumber").textContent.trim();
    
    // Abrir chat de WhatsApp al hacer clic en el ícono
    whatsappIcon.addEventListener("click", function() {
        openWhatsAppChat(whatsappNumber);
    });

    // Abrir chat de WhatsApp al hacer clic en el número de teléfono
    whatsappNumber.addEventListener("click", function() {
        openWhatsAppChat(whatsappNumber);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var whatsappLogo = document.getElementById("whatsappLogo");
  
    // Abrir chat de WhatsApp al hacer clic en la imagen
    whatsappLogo.addEventListener("click", function() {
        openWhatsAppChat("56996787780", "Me gustaría obtener más información sobre sus servicios"); // Reemplaza con tu número de WhatsApp y el mensaje predeterminado que desees
    });
});

function openWhatsAppChat(number, message) {
    // Reemplazar el número con el formato requerido por WhatsApp
    number = number.replace(/\s/g, "").replace(/-/g, "").replace("+", "");
    
    // Codificar el mensaje para que sea parte de la URL
    var encodedMessage = encodeURIComponent(message);
    
    // Construir la URL del chat de WhatsApp con el mensaje predeterminado
    var whatsappURL = "https://wa.me/" + number + "?text=" + encodedMessage;
  
    // Abrir la URL del chat de WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
}

