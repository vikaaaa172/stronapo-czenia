document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("loginForm").classList.remove("hidden");
});

document.getElementById("submitLogin").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("hidden");
  const status = document.getElementById("status");
  status.classList.remove("hidden");
  status.innerText = "Łączenie z urządzeniami...";

  setTimeout(() => {
    status.innerText = "Wszystkie urządzenia zostały połączone ✅";
    setTimeout(() => {
      document.getElementById("printerIssue").classList.remove("hidden");
    }, 5000);
  }, 2000);
});

document.getElementById("helpBtn").addEventListener("click", () => {
  document.getElementById("helpForm").classList.remove("hidden");
});
