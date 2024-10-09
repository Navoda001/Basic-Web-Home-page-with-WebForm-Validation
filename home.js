

function validateForm() {

    let isValid = true;

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numberError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate name
    if (name == "") {
        document.getElementById("nameError").textContent = "*Name is required.";
        isValid = false;
    } else {
        let name_pattern = /^[a-zA-Z-. ]+$/i;
        if (!name_pattern.test(name)) {
            isValid = false;
            document.getElementById("nameError").textContent = "*Name cannot contain numbers or special characters.";
        }
    }

    // Validate number
    if (mobile === "") {
        document.getElementById("numberError").textContent = "*Please enter a valid phone number..";
        isValid = false;
    } else {
        let number_pattern = /^[0][0-9]{9}$/i;
        if (!number_pattern.test(mobile)) {
            isValid = false;
            document.getElementById("numberError").textContent = "*Please Enter valid phone number."
        }
    }
    // Validate email
    if (email === "") {
        document.getElementById("emailError").textContent = "*Please enter a valid email address..";
        isValid = false;
    }else{
        let email_pattern= /^([a-zA-Z])([a-zA-Z0-9.-_]+)[@]([a-zA-Z0-9.-_. ]+)\.[a-zA-Z]{2,6}$/i;
        if(!email_pattern.test(email)){
            isValid = false;
            document.getElementById("emailError").textContent = "*Please Enter valid email."
        } 
    }
    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "*Message is required.";
        isValid = false;
    }
    if (!isValid) {
        return false;
    }

    alert("Form submitted successfully!");
    document.getElementById("myForm").submit();
    return true;


}
 let slideIndex = 0;
showSlides();
    
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500);
}