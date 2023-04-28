
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
                "concepto": "algo"
            },
            {
                "apellido": "Oliver",
                "nombre": "María Victoria",
                "concepto": "Te amooo"
            },
            {
                "apellido": "Acevedo",
                "nombre": "Diana",
                "concepto": ""
            },
            {
                "apellido": "Zorzzi",
                "nombre": "Enzo",
                "concepto": ""
            },
            {
                "apellido": "Loza",
                "nombre": "Fabricio",
                "concepto": ""
            },
            {
                "apellido": "Grilli",
                "nombre": "Facundo",
                "concepto": ""
            },
            {
                "apellido": "Ponferrada",
                "nombre": "Gastón Alejandro",
                "concepto": ""
            },
            {
                "apellido": "Albarracin",
                "nombre": "Indiana",
                "concepto": ""
            },
            {
                "apellido": "Reyes",
                "nombre": "Lucas",
                "concepto": ""
            },
            {
                "apellido": "Plattner",
                "nombre": "Marco giuliano",
                "concepto": ""
            },
            {
                "apellido": "Esquivel",
                "nombre": "Mateo",
                "concepto": ""
            },
            {
                "apellido": "Ramirez  ",
                "nombre": "Melody",
                "concepto": ""
            },
            {
                "apellido": "Passarelli ",
                "nombre": "Milagros",
                "concepto": ""
            },
            {
                "apellido": "Ahmed ",
                "nombre": "Nayeli",
                "concepto": ""
            },
            {
                "apellido": "Pérez",
                "nombre": "María Itati",
                "concepto": ""
            },
            {
                "apellido": "Solís",
                "nombre": "Ana Paula",
                "concepto": ""
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

