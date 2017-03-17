import styled from 'styled-components';
import style from '../style/config.js';

const Button = styled.button`
position: relative;
display: inline-block;
border-radius: 4px;
background-color: transparent;
color: inherit;
transition: all 0.3s ease-in-out;
border: solid 1px transparent;

&:hover { color: ${style.colors.primary}; }
${props => props.primary &&
`background-color: ${style.colors.primary}; color: white;` 
}
`

export default Button;
