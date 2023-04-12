const email = document.querySelector("#email");
const formSubmit = document.querySelector("#form-submit");

formSubmit.addEventListener("click", function() {
	alert("Thank you for sending an email. I will reach you out to you at your email " + email.value + " regarding your concenrn. Have a great day!");
})