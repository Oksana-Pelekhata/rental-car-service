import styled from 'styled-components';

export const ButtonThumb = styled.div`
// margin-left: 150px;
padding: 7px 15px;
background-color: white;
border-radius: 8px;
border: transparent;
`

export const Button = styled.a`
text-decoration: none;
color: #3470FF;
    font-family: manrope;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(20/14);
    text-align: center;
&:hover,
focus {
    color: grey;
}
`