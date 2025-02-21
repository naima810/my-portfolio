document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the form inputs
    const name = document.querySelector(".name").value;
    const contact = document.querySelector(".phone").value;
    const email = document.querySelector(".email").value;
    const complaint = document.querySelector(".complaint").value;


    // WhatsApp API URL (add your WhatsApp number)
    const phoneNumber = "923227120475"; // Replace with the owner's WhatsApp number (e.g., "923001234567")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Hello, I have a message:\n\nName: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage : ${complaint}`
    )}`;

    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');
    setTimeout(function() {
        location.reload(); // Refresh the page
    }, 3000);
});

/*Functionality for toggle button*/

function toggle (){
    document.querySelector(".display").style.display = "block";
    document.querySelector(".hnav").style.paddingTop = "20px";
}
function closefun (){
    document.querySelector(".display").style.display = "none";
}
