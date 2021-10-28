import React from 'react';
import { ResultadoDiv, Precio, Info } from '../styled/Styled';

const Cotizacion = ({ cotizacion }) => {
	if (Object.keys(cotizacion).length === 0) return null;
	console.log(cotizacion);
	return (
		<ResultadoDiv>
			<Precio>
				El precio es: <span>{cotizacion.PRICE}</span>
			</Precio>
			<Info>
				Precio más alto del día: <span>{cotizacion.HIGHDAY}</span>
			</Info>
			<Info>
				Precio más bajo del día: <span>{cotizacion.LOWDAY}</span>
			</Info>
			<Info>
				Precio más alto en las ultimas 24 horas:{' '}
				<span>{cotizacion.HIGH24HOUR}</span>
			</Info>
			<Info>
				Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span>
			</Info>

			<Info>
				Última Actualización: <span>{cotizacion.LASTUPDATE}</span>
			</Info>
		</ResultadoDiv>
	);
};

export default Cotizacion;
