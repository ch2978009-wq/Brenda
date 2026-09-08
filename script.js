function comenzar() {

    document.getElementById("carta").scrollIntoView({
        behavior: "smooth"
    });

    crearCorazones();

    const musica = document.getElementById("musica");

    musica.play();

}


// ❤️ CORAZONES FLOTANTES

function crearCorazones() {

    const contenedor =
        document.getElementById("corazones");

    setInterval(() => {

        const corazon =
            document.createElement("div");

        corazon.classList.add("corazon");

        corazon.innerHTML = "❤️";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            (Math.random() * 20 + 12) + "px";

        contenedor.appendChild(corazon);

        setTimeout(() => {

            corazon.remove();

        }, 6000);

    }, 500);

}


// ✨ ANIMACIÓN DE LOS TEXTOS

const textos =
    document.querySelectorAll(".texto");


const observador =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.2
    });


textos.forEach((texto) => {

    observador.observe(texto);

});
const fotos =
    document.querySelectorAll(".foto-momento");


const observadorFotos =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    }, {
        threshold: 0.3
    });


fotos.forEach((foto) => {

    observadorFotos.observe(foto);

});
function respuestaSi() {

    const respuesta =
        document.getElementById("respuesta");

    respuesta.innerHTML =
        "Entonces hagamos que esta historia siga creciendo juntos. ❤️✨";

    lanzarMuchosCorazones();

}


function respuestaNo() {

    const respuesta =
        document.getElementById("respuesta");

    respuesta.innerHTML =
        "Creo que ese botón se equivocó 😌❤️";

}


function lanzarMuchosCorazones() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.classList.add("corazon");

            corazon.innerHTML = "❤️";

            corazon.style.left =
                Math.random() * 100 + "vw";

            corazon.style.fontSize =
                (Math.random() * 25 + 15) + "px";

            document
                .getElementById("corazones")
                .appendChild(corazon);

            setTimeout(() => {

                corazon.remove();

            }, 6000);

        }, i * 100);

    }

}