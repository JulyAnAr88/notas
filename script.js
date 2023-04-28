
/*const btn = document.querySelector('[data-btn]');*/

/*btn.addEventListener ('click', (event) => {
    event.preventDefault();*/

$(document).ready(function () {
    $('[data-btn]').click(function () {
        $("#nota").modal();

        const notasJSON = [
            {
                "apellido": "Budiño",
                "nombre": "Florencia",
                "concepto": "Excelente &#128526"
            },
            {
                "apellido": "Acevedo",
                "nombre": "Diana",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Zorzzi",
                "nombre": "Enzo",
                "concepto": "Excelente &#128526"
            },
            {
                "apellido": "Loza",
                "nombre": "Fabricio",
                "concepto": "Aprobado &#128513"
            },
            {
                "apellido": "Grilli",
                "nombre": "Facundo",
                "concepto": "Aprobado &#128513"
            },
            {
                "apellido": "Ponferrada",
                "nombre": "Gastón Alejandro",
                "concepto": "Aprobado &#128513"
            },
            {
                "apellido": "Albarracin",
                "nombre": "Indiana",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Reyes",
                "nombre": "Lucas",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Plattner",
                "nombre": "Marco giuliano",
                "concepto": "Aprobado &#128513"
            },
            {
                "apellido": "Esquivel",
                "nombre": "Mateo",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Ramirez  ",
                "nombre": "Melody",
                "concepto": "Excelente &#128526"
            },
            {
                "apellido": "Passarelli ",
                "nombre": "Milagros",
                "concepto": "Aprobado &#128513"
            },
            {
                "apellido": "Ahmed ",
                "nombre": "Nayeli",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Pérez",
                "nombre": "María Itati",
                "concepto": "No aprobado &#128531"
            },
            {
                "apellido": "Alma",
                "nombre": "Alma",
                "concepto": "La mejor más capa &#128526"
            },
            {
                "apellido": "Solís",
                "nombre": "Ana Paula",
                "concepto": "Aprobado &#128513"
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

        setName(notasJSON, value);

    })
})

function setName(notasJSON, apellido){
    const nameCert = document.querySelector('[name-text]');
    const concepto = document.querySelector('[concepto-text]');
    /* JSON.stringify(sessionStorage.getItem("name"));*/

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
        
    
}

