import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({
	guardarGasto,
	guardarCrearGasto,
}) => {
	const [nombre, guardarNombre] = useState('');
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false);

	// Cuando se agregue el gasto
	const agregarGasto = e => {
		e.preventDefault();
		// console.log('Gasto agregado');

		// Validar
		if (
			cantidad < 1 ||
			isNaN(cantidad) ||
			nombre.trim === ''
		) {
			guardarError(true);
			return;
		}

		guardarError(false);

		// Construir el gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};
		// console.log(gasto);

		// Pasar el gasto al componente principal
		guardarGasto(gasto);
		guardarCrearGasto(true);
		// resetear el form
		guardarNombre('');
		guardarCantidad(0);
	};

	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus gastos aquí</h2>
			{error ? (
				<Error mensaje='Error al guardar gasto' />
			) : null}
			<div className='campo'>
				<label>Nombre Gasto</label>
				<input
					type='text'
					className='u-full-width'
					placeholder='Ej. Transporte'
					value={nombre}
					onChange={e => guardarNombre(e.target.value)}
				/>
			</div>
			<div className='campo'>
				<label>Cantidad Gasto</label>
				<input
					type='number'
					className='u-full-width'
					placeholder='Ej. 300'
					value={cantidad}
					onChange={e =>
						guardarCantidad(parseInt(e.target.value, 10))
					}
				/>
			</div>
			<button
				type='submit'
				className='button-primary u-full-width'
			>
				Agregar gasto
			</button>
		</form>
	);
};

export default Formulario;
