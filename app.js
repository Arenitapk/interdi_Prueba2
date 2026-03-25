//================================================================================================================================
                        //INICIO DE ARCHIVO JS
//================================================================================================================================
                        //SPLASH SCREEN
                        
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 1000); // 1000 ms = 1 segundo
});