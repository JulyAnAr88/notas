
/*const btn = document.querySelector('[data-btn]');*/

/*btn.addEventListener ('click', (event) => {
    event.preventDefault();*/

$(document).ready(function () {
    $('[data-btn]').click(function () {

        const notasJSON = [
            {
                "apellido": "Zorzzi",
                "nombre": "Enzo",
                "concepto": "No aprobado &#128531",
                "link": "https://drive.google.com/file/d/14PJrx6LYVCREmiiuBc9fEUbsE5nqhaw6/view?usp=drive_link"
            },
            {
                "apellido": "Loza",
                "nombre": "Fabricio",
                "concepto": "No aprobado &#128531",
                "link":"https://drive.google.com/file/d/1mLlcN6oqksYwya0250-XBpyKgD_UIRyU/view?usp=drive_link"
            },
            {
                "apellido": "Grilli",
                "nombre": "Facundo",
                "concepto": "Aprobado &#128513",
                "link": "https://drive.google.com/file/d/1TOkLGwQQDe9NbEjFrfK5Oc5qBH8N2-cJ/view?usp=drive_link"
            },
            {
                "apellido": "Ponferrada",
                "nombre": "Gastón Alejandro",
                "concepto": "Aprobado &#128513",
                "link":"https://drive.google.com/file/d/1e10NR61Ttbj3HFLIl_7EsXwQ_R6LrxXF/view?usp=drive_link"
            },
            {
                "apellido": "Albarracín",
                "nombre": "Indiana",
                "concepto": "Aprobado &#128513",
                "link": "https://drive.google.com/file/d/1YgFS4SKAqvdeKadJKwiRN8eBWKlagL9E/view?usp=drive_link"
            },
            {
                "apellido": "Plattner",
                "nombre": "Marco giuliano",
                "concepto": "No aprobado &#128531",
                "link":"https://drive.google.com/file/d/17ZZfBUn_2EJeHFF0mpPW-qszYPodcHq4/view?usp=drive_link"
            },
            {
                "apellido": "Esquivel",
                "nombre": "Mateo",
                "concepto": "No aprobado &#128531",
                "link": "https://drive.google.com/file/d/1wWndkNyTEP5dqbyXAUV_jKEXQ6U0VvUH/view?usp=drive_link"
            },
            {
                "apellido": "Passarelli",
                "nombre": "Milagros",
                "concepto": "Aprobado &#128513",
                "link": "https://drive.google.com/file/d/1sm2jGdS4HlbG1h7lhrpRGogSBfQS1S5t/view?usp=drive_link"
            },
            {
                "apellido": "Ahmed",
                "nombre": "Nayeli",
                "concepto": "No aprobado &#128531",
                "link": "https://drive.google.com/file/d/14XILGkqO7iZoVtCGBxI5MoxD5RYBnw7w/view?usp=drive_link"
            },
            {
                "apellido": "Perez",
                "nombre": "María Itati",
                "concepto": "No aprobado &#128531",
                "link":"https://drive.google.com/file/d/1nWGQIuk1m1VrKUP9F9fRykVybsXXZFsQ/view?usp=drive_link"
            },
            {
                "apellido": "Solis",
                "nombre": "Ana Paula",
                "concepto": "Excelente &#128526",
                "link": 'https://drive.google.com/file/d/1eNfFCHTQfQ3_UlErFGKfl7Q35FaG5ahh/view?usp=drive_link'
            }
        ]
        const input = document.querySelector('[data-name-input]');

        const value = input.value;

        input.value = '';

        const nameObj = {
            value,
        };

        const nameStorage = JSON.parse(localStorage.getItem('tasks')) || [];
        nameStorage.push(nameObj);

        localStorage.setItem('name', JSON.stringify(nameStorage));

        getLink(notasJSON, value)

    })
})

/* function setName(notasJSON, apellido) {
    const nameCert = document.querySelector('[name-text]');
    const concepto = document.querySelector('[concepto-text]');
    // JSON.stringify(sessionStorage.getItem("name"));

    notasJSON.forEach(estudiante => {
        while (apellido.toUpperCase() == estudiante.apellido.toUpperCase()) {
            const name = estudiante.nombre;
            const concept = estudiante.concepto;
            console.log(name);
            nameCert.innerHTML = name;
            concepto.innerHTML = concept;
            break;

        }
    });
} */

function getLink(notasJSON, apellido) {

    const concepto = document.querySelector('[examen-text]');
    /* JSON.stringify(sessionStorage.getItem("name"));*/

    notasJSON.forEach(estudiante => {
        while (apellido.toUpperCase() == estudiante.apellido.toUpperCase()) {
            console.log(estudiante.link)
            // Crea un elemento de enlace (<a>) y configura sus atributos
            var enlace = document.createElement('a');
            enlace.href = estudiante.link;
            enlace.textContent = 'Ingresa ahora';

            // Agrega el enlace al contenido del contenedor
            concepto.innerHTML = '';
            concepto.appendChild(enlace);

            break;
        }
    });
}

