
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
                "act_1": "8,33",
                "act_2": " ",
                "tp": " ",
                "asistencia": "57,1%",
                "final": "4",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Acevedo",
                "nombre": "Diana",
                "act_1": "3,33",
                "act_2": " ",
                "tp": " ",
                "asistencia": "52,4%",
                "final": "3",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Ahmed",
                "nombre": "Nayeli",
                "act_1": "2,22",
                "act_2": "6,07",
                "tp": "7,5",
                "asistencia": "61,9%",
                "final": "7",
                "recupera": "Aprobada"
            },
            {
                "apellido": "Loza",
                "nombre": "Fabricio",
                "act_1": "7,22",
                "act_2": "1,07",
                "tp": " ",
                "asistencia": "57,1%",
                "final": "4",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Perez",
                "nombre": "María Itati",
                "act_1": "1,11",
                "act_2": "1,43",
                "tp": " ",
                "asistencia": "61,9%",
                "final": "3",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Ponferrada",
                "nombre": "Gastón Alejandro",
                "act_1": "5,56",
                "act_2": "6,43",
                "tp": " ",
                "asistencia": "71,4%",
                "final": "7",
                "recupera": "Aprobado"
            },
            {
                "apellido": "Reyes",
                "nombre": "Lucas",
                "act_1": "3,33",
                "act_2": " ",
                "tp": " ",
                "asistencia": "47,6%",
                "final": "3",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Solis",
                "nombre": "Ana Paula",
                "act_1": "6,11",
                "act_2": "8,43",
                "tp": " ",
                "asistencia": "76,2%",
                "final": "8",
                "recupera": "Aprobada"
            },
            {
                "apellido": "Albarracin",
                "nombre": "Indiana",
                "act_1": "5",
                "act_2": "5,5",
                "tp": "7",
                "asistencia": "95,2%",
                "final": "7",
                "recupera": "Aprobada"
            },
            {
                "apellido": "Esquivel",
                "nombre": "Mateo",
                "act_1": "4,44",
                "act_2": "2,14",
                "tp": "8",
                "asistencia": "81%",
                "final": "5",
                "recupera": "Debe asistir a semana de recuperatorio"
            },
            {
                "apellido": "Grilli",
                "nombre": "Facundo",
                "act_1": "7,22",
                "act_2": "6,43",
                "tp": "8",
                "asistencia": "81%",
                "final": "8",
                "recupera": "Aprobado"
            },
            {
                "apellido": "Passarelli",
                "nombre": "Milagros",
                "act_1": "7,78",
                "act_2": "6,43",
                "tp": " ",
                "asistencia": "76,2",
                "final": "7",
                "recupera": "Aprobada, pero debe asistir a semana de recuperatorio por cantidad de faltas"
            },
            {
                "apellido": "Plattner",
                "nombre": "Marco giuliano",
                "act_1": "5,56",
                "act_2": "2,14",
                "tp": "7,5",
                "asistencia": "85,7",
                "final": "7",
                "recupera": "Aprobado"
            },
            {
                "apellido": "Zorzzi",
                "nombre": "Enzo",
                "act_1": "8,33",
                "act_2": "4,64",
                "tp": "7",
                "asistencia": "76,2%",
                "final": "8",
                "recupera": "Aprobado"
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

function getLink(notasJSON, apellido) {

    const data_estudiante = document.querySelector('[data-estudiante]');
    const tabla = document.querySelector('[data-table]');
    const data_recupera = document.querySelector('[data-recupera]');

    notasJSON.forEach(estudiante => {
        while (apellido.toUpperCase() == estudiante.apellido.toUpperCase()) {
            
            // Crea un elemento <span> y configura sus atributos
            var enlace = document.createElement('span');
            enlace.textContent = estudiante.apellido + ", " + estudiante.nombre;
            data_estudiante.innerHTML="";
            data_estudiante.appendChild(enlace);
            // Agrega los datos a la tabla
            const linea = document.createElement('tr');
            const contenido =`
            <td>${estudiante.act_1}</td>
            <td>${estudiante.act_2}</td>
            <td>${estudiante.tp}</td>
            <td>${estudiante.asistencia}</td>
            <td class="td-nf">${estudiante.final}</td>
            `;
            linea.innerHTML = contenido;
            tabla.innerHTML = '';
            tabla.appendChild(linea);

            var recupera = document.createElement('span');
            recupera.textContent = estudiante.recupera;
            data_recupera.innerHTML="";
            data_recupera.appendChild(recupera);

            break;
        }
    });
}

