import styled from 'styled-components';
import {colors} from '../style/config';

// background-color: #fff;
// border: solid 1px transparent;
// box-shadow: 0 1px 2px rgba(0,0,0,0.15);

const Button = styled.button`
position: relative;
display: inline-block;
border-radius: 4px;
background-color: transparent;
color: inherit;
transition: all 0.3s ease-in-out;
border: solid 1px transparent;

&:hover { color: ${colors.primary}; }
${props => props.primary &&
`background-color: ${colors.primary}; color: white;` 
}
`

export default Button;
