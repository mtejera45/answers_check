import styled, {css} from 'styled-components';


const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d",
}

const Label = styled.label`

	${props => props.valid === "false" && css`
		color: ${colores.error};
	`}
	${props => props.valid === 'true' && css`
		color: ${colores.exito};
	`}
`;

export {
	Label,
};