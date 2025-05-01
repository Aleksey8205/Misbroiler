document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    function finishLoading() {
        clearTimeout(timeoutHandle);
        preloader.style.display = "none";
        content.style.display = "block";
    }

   const timeoutHandle = setTimeout(finishLoading, 4000)
})