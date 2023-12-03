
/*const btn = document.querySelector('[data-btn]');*/

/*btn.addEventListener ('click', (event) => {
    event.preventDefault();*/

var materias = [
    "Cs. Sociales",
    "Cs. Naturales",
    "Matemática",
    "Lengua",
    "Inglés",
    "Economía y Adm."
]

$(document).ready(function () {
    $('[data-btn-mate]').click(function () {
        $("#nota-mate").modal();

        const notasMateJSON = [
            {
                "apellido": "Barrios",
                "nombre": "Jesica",
                "dni": "46449272",
                "act_1": "0",
                "tp": "0",
                "asistencia": "7",
                "final": "1",
                "recupera": "Libre"
            },            
            {
                "apellido": "Casco",
                "nombre": "Andrea",
                "dni": "41515222",
                "act_1": "0",
                "tp": "0",
                "asistencia": "25",
                "final": "1",
                "recupera": "Libre"
            },
            {
                "apellido": "Casco",
                "nombre": "Laura",
                "dni": "36263109",
                "act_1": "0",
                "tp": "9",
                "asistencia": "35",
                "final": "-",
                "recupera": "<p>Recupera primera parte (conceptos básicos de Estadística, revisar el siguiente archivo (<a href='https:\/\/drive.google.com\/file\/d\/1pc1wkD7G23eTOGxQLNPZ7FnjzuOI6l_i\/view?usp=drive_link' target='_blank' rel='noopener'>Estadística<\/a>, antes de <strong>Tabla de frecuencia</strong>)<\/p>"
            },
            {
                "apellido": "Casco",
                "nombre": "Zunilda",
                "dni": "",
                "act_1": "10",
                "tp": "-",
                "asistencia": "47",
                "final": "-",
                "recupera": "Debe entregar TP integrador"
            },
            {
                "apellido": "Espíndola",
                "nombre": "Jorge",
                "dni": "39127609",
                "act_1": "5",
                "tp": "5,5",
                "asistencia": "43",
                "final": "-",
                "recupera": "<p>Recupera primera parte (conceptos básicos de Estadística, revisar el siguiente archivo <a href='https:\/\/drive.google.com\/file\/d\/1pc1wkD7G23eTOGxQLNPZ7FnjzuOI6l_i\/view?usp=drive_link' target='_blank' rel='noopener'>Estadística<\/a>, antes de <strong>Tabla de frecuencia<\/strong>)<\/p>"
            },
            {
                "apellido": "Fernández",
                "nombre": "Lucía",
                "dni": "30502034",
                "act_1": "5",
                "tp": "5,5",
                "asistencia": "50",
                "final": "-",
                "recupera": "<p>Recupera primera parte (conceptos básicos de Estadística, revisar el siguiente archivo <a href='https:\/\/drive.google.com\/file\/d\/1pc1wkD7G23eTOGxQLNPZ7FnjzuOI6l_i\/view?usp=drive_link' target='_blank' rel='noopener'>Estadística<\/a>, antes de <strong>Tabla de frecuencia<\/strong>)<\/p>"
            },
            {
                "apellido": "Gamarra",
                "nombre": "Gastón",
                "dni": "27204597",
                "act_1": "8",
                "tp": "7,7",
                "asistencia": "60",
                "final": "9",
                "recupera": "Aprobado, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            },
            {
                "apellido": "Garro",
                "nombre": "Marianela",
                "dni": "415155244",
                "act_1": "0",
                "tp": "-",
                "asistencia": "27",
                "final": "-",
                "recupera": "Libre"
            },
            {
                "apellido": "Hilve",
                "nombre": "Claudia",
                "dni": "26614045",
                "act_1": "7",
                "tp": "8,3",
                "asistencia": "73",
                "final": "9",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            },
            {
                "apellido": "Lencina",
                "nombre": "Lorena",
                "dni": "30452072",
                "act_1": "8",
                "tp": "7,9",
                "asistencia": "73",
                "final": "9",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            },
            {
                "apellido": "Machado",
                "nombre": "Griselda",
                "dni": "25046575",
                "act_1": "5",
                "tp": "5,5",
                "asistencia": "70",
                "final": "-",
                "recupera": "<p>Recupera primera parte (conceptos básicos de Estadística, revisar el siguiente archivo <a href='https:\/\/drive.google.com\/file\/d\/1pc1wkD7G23eTOGxQLNPZ7FnjzuOI6l_i\/view?usp=drive_link' target='_blank' rel='noopener'>Estadística<\/a>, antes de <strong>Tabla de frecuencia<\/strong>)<\/p>"
            },
            {
                "apellido": "Mertes",
                "nombre": "Milagros",
                "dni": "",
                "act_1": "0",
                "tp": "0",
                "asistencia": "1",
                "final": "1",
                "recupera": "Libre"
            },
            {
                "apellido": "Miranda",
                "nombre": "Pamela",
                "dni": "31155711",
                "act_1": "10",
                "tp": "8,1",
                "asistencia": "70",
                "final": "9",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            }, 
            {
                "apellido": "Pérez",
                "nombre": "Vanesa",
                "dni": "31419553",
                "act_1": "7",
                "tp": "7,9",
                "asistencia": "40",
                "final": "7",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            }, 
            {
                "apellido": "Romero",
                "nombre": "Azul",
                "dni": "44525098",
                "act_1": "10",
                "tp": "6,5",
                "asistencia": "63",
                "final": "8",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            }, 
            {
                "apellido": "Terraza",
                "nombre": "Mónica",
                "dni": "23264212",
                "act_1": "8",
                "tp": "8,3",
                "asistencia": "57",
                "final": "9",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
            }, 
            {
                "apellido": "Zapata",
                "nombre": "Rosa",
                "dni": "",
                "act_1": "7",
                "tp": "7,9",
                "asistencia": "40",
                "final": "7",
                "recupera": "Aprobada, ¡excelente trabajo, felicitaciones por el esfuerzo! 💪"
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

        getLinkMate(notasMateJSON, value)

    })
})

$(document).ready(function () {
    $('[data-btn-materias]').click(function () {
        $("#materias-todas").modal();

        const notasMateriasJSON = [
            {
                "apellido": "Plattner",
                "nombre": "Marco giuliano",
                "cs_soc_1": "8,33",
                "cs_soc_2": "8,33",
                "cs_nat_1": "8,33",
                "cs_nat_2": "8,33",
                "mate_1": "8,33",
                "mate_2": "8,33",
                "lengua_1": "8,33",
                "lengua_2": "4,64",
                "ingles_1": "4,64",
                "ingles_2": "4,64",
                "econ_1": "4,64",
                "econ_2": "4,64",
                "condicion": "76,2%",
                "final": "8",
                "recupera": "Aprobado"
            },
            {
                "apellido": "pepe",
                "nombre": "Enzo",
                "cs_soc_1": "8,33",
                "cs_soc_2": "8,33",
                "cs_nat_1": "8,33",
                "cs_nat_2": "8,33",
                "mate_1": "8,33",
                "mate_2": "8,33",
                "lengua_1": "8,33",
                "lengua_2": "4,64",
                "ingles_1": "4,64",
                "ingles_2": "4,64",
                "econ_1": "4,64",
                "econ_2": "4,64",
                "condicion": "76,2%",
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
            data_estudiante.innerHTML = "";
            data_estudiante.appendChild(enlace);
            // Agrega los datos a la tabla
            matrizMateria = armarMatriz(estudiante.apellido);

            for (let j = 0; j < 2; j++) {
                for (let i = 0; i < 6; i++) {
                    const linea = document.createElement('tr');
                    const contenido = `
                    <td>${materias[i]}</td>
                    <td>${matrizMateria[j][i]}</td>
                    `;
                    linea.innerHTML = contenido;
                    tabla.innerHTML = '';
                    tabla.appendChild(linea);
                }
            }

            /*const linea = document.createElement('tr');
            const contenido = `
            <td>${materias[3]}</td>
            <td>${estudiante.lengua_1}</td>
            <td>${estudiante.lengua_2}</td>
            
                    <td>${estudiante.tp}</td>
                    <td>${estudiante.asistencia}</td>
                    <td class="td-nf">${estudiante.final}</td>
            `;
            linea.innerHTML = contenido;
            tabla.innerHTML = '';
            tabla.appendChild(linea);
            */

            var recupera = document.createElement('span');
            recupera.textContent = estudiante.recupera;
            data_recupera.innerHTML = "";
            data_recupera.appendChild(recupera);

            break;
        }
    });
}

function armarMatriz(apellido) {
    notasMaterias = [];
    notasMateriasJSON.forEach(estudiante => {
        if (apellido.toUpperCase() == estudiante.apellido.toUpperCase()) {
            notasMaterias[0][0] = estudiante.cs_soc_1;
            notasMaterias[0][1] = estudiante.cs_soc_2;
            notasMaterias[1][0] = estudiante.cs_nat_1;
            notasMaterias[1][1] = estudiante.cs_nat_2;
            notasMaterias[2][0] = estudiante.mate_1;
            notasMaterias[2][1] = estudiante.mate_1;
            notasMaterias[3][0] = estudiante.lengua_1;
            notasMaterias[3][1] = estudiante.lengua_1;
            notasMaterias[4][0] = estudiante.ingles_2;
            notasMaterias[4][1] = estudiante.ingles_2;
            notasMaterias[5][0] = estudiante.econ_2;
            notasMaterias[5][1] = estudiante.econ_2;
        }
    })
    return notasMaterias;
}


function getLinkMate(notasJSON, dni) {

    const data_estudiante = document.querySelector('[data-estudiante]');
    const tabla = document.querySelector('[data-table]');
    const data_recupera = document.querySelector('[data-recupera]');

    notasJSON.forEach(estudiante => {
        while (dni.trim() == estudiante.dni) {

            // Crea un elemento <span> y configura sus atributos
            var enlace = document.createElement('span');
            enlace.textContent = estudiante.apellido + ", " + estudiante.nombre;
            data_estudiante.innerHTML = "";
            data_estudiante.appendChild(enlace);
            // Agrega los datos a la tabla
                        
            var asistenciaAprob = "No aprobada";
            if(parseInt(estudiante.asistencia)>50){
                asistenciaAprob = "Aprobada";
            }
            const linea = document.createElement('tr');
            let contenido ='';
            if(parseInt(estudiante.final)>6){                
                contenido = `
                <td>${estudiante.act_1}</td>
                <td>${estudiante.tp}</td>
                <td>${asistenciaAprob}</td>
                <td class="td-nf">${estudiante.final}</td>
                `;
            }else{                
                contenido = `
                <td>${estudiante.act_1}</td>
                <td>${estudiante.tp}</td>
                <td>${asistenciaAprob}</td>
                <td class="td-nf-a">${estudiante.final}</td>
                `;
            }
            linea.innerHTML = contenido;
            tabla.innerHTML = '';
            tabla.appendChild(linea);

            var recupera = document.createElement('span');
            
            recupera.innerHTML = `${estudiante.recupera}`;
            data_recupera.innerHTML = '';
            data_recupera.appendChild(recupera);

            break;
        }
    });
}

