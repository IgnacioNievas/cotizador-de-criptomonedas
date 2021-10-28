import axios from 'axios';

const api = `https://min-api.cryptocompare.com/data`;

export const getApi = async (cripto, moneda) => {
	let resultado;
	if (cripto) {
		resultado = await axios(
			`${api}/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
		);
	} else {
		resultado = await axios(`${api}/top/mktcapfull?limit=10&tsym=USD`);
	}
	return resultado?.data;
};
