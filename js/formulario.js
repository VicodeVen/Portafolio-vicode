const d = document;

export default function formulario() {
const formulario = d.getElementById('formulario'),
inputs = d.querySelectorAll('#formulario input'),
expresiones = {
usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{7,14}$/
},

campos = {
	usuario: false,
	nombre: false,
	correo: false,
	telefono: false
};

const validarFormulario = (e) => {
	switch(e.target.name) {
		case "nombre":
			validarCampo(expresiones.usuario, e.target, e.target.name);
		break;
		case "apellido":
			validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
			case "correo":
				validarCampo(expresiones.correo, e.target, e.target.name);
				break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, e.target.name);
			break;
		}
	}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		d.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
		d.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
		d.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		d.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		d.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos[campo] = true;
	}else {
		d.getElementById(`grupo__${campo}`,"formulario__grupo-incorrecto");
		d.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
		d.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		d.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		d.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (campos.nombre && campos.apellido && campos.correo && campos.telefono){
		formulario.reset();
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-active');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-active');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');		
	}
});
}