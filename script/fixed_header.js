    document.addEventListener("DOMContentLoaded", function () {
        var mainHeader = document.getElementById("main-header");
        var fixedHeader = document.getElementById("fixed-header");

        // Adiciona um ouvinte de rolagem
        window.addEventListener("scroll", function () {
            // Obtém a posição de rolagem
            var scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Define a classe 'visible' com base na posição de rolagem
            if (scrollPosition > 100) {
                fixedHeader.classList.add("visible");
            } else {
                fixedHeader.classList.remove("visible");
            }
        });
    });

