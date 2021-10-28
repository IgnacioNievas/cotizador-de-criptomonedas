import React, { useState, useEffect } from 'react';
import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';
import { getApi } from '../api/getApi';
import { Boton } from '../styled/Styled';
import Swal from 'sweetalert2';

const Formulario = ({ setMoneda, setCrypto }) => {
	const [criptoMoneda, setCriptoMoneda] = useState([]);
	const MONEDAS = [
		{ codigo: 'USD', Nombre: 'Dólar estadounidense' },
		{ codigo: 'EUR', Nombre: 'Euro' },
		{ codigo: 'GBP', Nombre: 'Libra esterlina ' },
		{ codigo: 'ARS', Nombre: 'Peso Argentino' },
		{ codigo: 'BRL', Nombre: 'Real brasileño' },
	];

	useEffect(() => {
		getApi()
			.then((cripto) => setCriptoMoneda(cripto.Data))
			.catch((e) => console.log(e));
	}, []);

	const [moneda, SelectMoneda] = useMoneda('', MONEDAS);
	const [crypto, SelectCrypto] = useCryptomoneda('', criptoMoneda);

	const cotizarMoneda = (e) => {
		e.preventDefault();

		if (!moneda.trim() || !crypto.trim()) {
			Swal.fire({
				icon: 'warning',
				titleText: 'No dejar los campos vacio',
				timer: 3000,
				timerProgressBar: true,
				allowEnterKey: true,
				allowEscapeKey: true,
				allowOutsideClick: true,
				showConfirmButton: false,
			});
			return false;
		}
		setMoneda(moneda);
		setCrypto(crypto);
	};

	return (
		<div>
			<form onSubmit={cotizarMoneda}>
				<SelectMoneda />
				<SelectCrypto />

				<Boton type='submit'>Calcular</Boton>
			</form>
		</div>
	);
};

export default Formulario;
