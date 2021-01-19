import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({
	guardarPresupuesto,
	guardarRestante,
	actualizarPregunta,
}) => {
	// Definir state
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false);

	// Función para definir el presupuesto
	const definirPresupuesto = e => {
		guardarCantidad(parseInt(e.target.value, 10));
	};

	// Submit para definir el presupuesto
	const agregarPresupuesto = e => {
		e.preventDefault();

		// Validar
		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true);
			return;
		}
		// Si pasa la validación
		guardarError(false);
		guardarPresupuesto(cantidad);
		guardarRestante(cantidad);
		actualizarPregunta(false);
	};

	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>
			{error ? (
				<Error mensaje='Presupuesto no valido' />
			) : null}
			<form onSubmit={agregarPresupuesto}>
				<input
					type='number'
					className='u-full-width'
					placeholder='Ingresa tu presupuesto'
					onChange={definirPresupuesto}
				/>
				<button
					type='submit'
					className='button-primary u-full-width'
				>
					Definir presupuesto
				</button>
			</form>
		</Fragment>
	);
};

export default Pregunta;
