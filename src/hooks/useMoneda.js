import React, { useState } from 'react';
import { Label, Select } from '../styled/Styled';

const useMoneda = (stateInicial, monedas) => {
	const [moneda, setMoneda] = useState(stateInicial);

	const divisas = (e) => {
		setMoneda(e.target.value);
	};
	const seleccionar = () => (
		<>
			<Label>Elige tu moneda</Label>
			<Select value={moneda} onChange={divisas}>
				<option value=''>---seleccione---</option>
				{monedas.map((divisa, i) => (
					<option key={i} value={divisa.codigo}>
						{divisa.Nombre}
					</option>
				))}
			</Select>
		</>
	);

	return [moneda, seleccionar];
};

export default useMoneda;
