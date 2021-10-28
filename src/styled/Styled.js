import styled from 'styled-components';

export const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`;

export const Heading = styled.h1`
	font-family: 'Bebas neue', cursive;
	font-weight: bloder;
	font-size: 50px;
	text-align: left;
	color: blue;

	&::after {
		content: '';
		display: block;
		background-color: purple;
		height: 8px;
		width: 100px;
	}
`;

export const Label = styled.label`
	font-family: 'Bebas Neue', cursive;
	color: blue;
	text-shadow: 3px 3px red;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.4rem;
	margin-top: 2rem;
	display: block;
`;

export const Select = styled.select`
	width: 100%;
	display: block;
	padding: 1rem;
	-webkit-appearance: none;
	border-radius: 10px;
	border: none;
	font-size: 1.2rem;
`;

export const Boton = styled.button`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #fff;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #326ac0;
		cursor: pointer;
	}
`;

export const ResultadoDiv = styled.div`
	background-color: white;
	border-radius: 5px;
	color: blue;
	font-family: Arial, Helvetica, sans-serif;
`;

export const Info = styled.p`
	font-size: 18px;
	margin-left: 12px;
	span {
		font-weight: bold;
	}
`;
export const Precio = styled.p`
	font-size: 30px;
	margin-left: 12px;
	span {
		font-weight: bold;
	}
`;
