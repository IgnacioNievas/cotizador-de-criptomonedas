import React, { useState } from 'react';
import { Label, Select } from '../styled/Styled';

const useCryptomoneda = (stateInicial, crypto) => {
	const [cripto, setCripto] = useState(stateInicial);

	const getCypto = (e) => {
		setCripto(e.target.value);
	};

	const seleccionarCrypto = () => (
		<>
			<Label>Elige tu cryptomoneda </Label>
			<Select value={cripto} onChange={getCypto}>
				<option value=''>---seleccione---</option>
				{crypto.map((cryptomoneda, i) => (
					<option key={i} value={cryptomoneda.CoinInfo.Name}>
						{cryptomoneda.CoinInfo.FullName}
					</option>
				))}
			</Select>
		</>
	);

	return [cripto, seleccionarCrypto];
};

export default useCryptomoneda;
