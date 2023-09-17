import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
display: flex;
flex-wrap: wrap;
align-items: center;
// margin-bottom: 50px;
height: 50px;
background-color: rgba(52, 112, 255, 0.8);
justify-content: space-around;
// padding: 0px 50px;
`
export const HeaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
// margin-left: 100px;
justify-content: center;
`

export const Navigation = styled.nav`
display: flex;
flex-wrap: wrap;
gap: 30px;
`

export const Link = styled(NavLink)`
text-decoration: none;
color: white;
font-family: manrope;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(20/14);

&:hover,
focus {
color: grey;
}
`

