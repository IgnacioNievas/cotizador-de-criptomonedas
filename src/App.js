import React, { useState, useEffect } from 'react';
import { getApi } from './api/getApi';
import { Contenedor, Heading } from './styled/Styled';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './spinner/Spinner';

function App() {
	const [moneda, setMoneda] = useState('');
	const [crypto, setCrypto] = useState('');
	const [cotizacion, setCotizacion] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const cotizacionCrypto = () => {
			if (moneda === '') return false;

			setIsLoading(true);

			setTimeout(() => {
				getApi(crypto, moneda)
					.then((cripto) => {
						setCotizacion(cripto.DISPLAY[crypto][moneda]);
						setIsLoading(false);
					})
					.catch((e) => console.log(e));
			}, 2000);
		};
		cotizacionCrypto();
	}, [crypto, moneda]);

	return (
		<Contenedor>
			<div>
				<Heading>Cotizador de Cryptomonedas</Heading>
				<Formulario setMoneda={setMoneda} setCrypto={setCrypto} />
			</div>
			<div style={{ marginTop: '15%' }}>
				<Heading>Cotización</Heading>
				{isLoading ? <Spinner /> : <Cotizacion cotizacion={cotizacion} />}
			</div>
		</Contenedor>
	);
}

export default App;
