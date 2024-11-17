
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "chris@gmail.com" && password === "Salam_123") {
        window.location.href = "/views/my.html";
           } else {
        alert("Email və ya şifrə düzgün deyil!");
    }
});
