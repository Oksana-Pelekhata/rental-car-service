import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
gap: 18px;
align-items: flex-end;
margin-bottom: 50px;
margin-top: 100px;
justify-content: center;
`

export const BlockThumb = styled.div`
display: flex;
flex-direction: column;
`
export const Label = styled.label`
font-family: manrope;
font-size: 14px;
font-weight: 500;
line-height: calc(18/14);
color: #8A8A89;
`

export const Select = styled.select`
border-radius: 14px;
border: none;
height: 48px;
padding: 14px 18px;

font-family: manrope;
font-weight: 500;
font-size: 18px;
line-height: calc(20/18);
background-color: #F7F7FB;
color: #121417;


`
export const Input = styled.input`
border: none;
height: 48px;
width: 160px;

font-family: manrope;
font-weight: 500;
font-size: 18px;
line-height: calc(20/18);

background-color: #F7F7FB;
color: #121417;
padding: 14px 18px;

&::placeholder {
    color: #121417;
    opacity: 1;
}
`

export const Button = styled.button`
border: none;
border-radius: 14px;

width: 136px;
height: 48px;
padding: 14px 44px;

font-family: manrope;
font-weight: 600;
font-size: 14px;

background-color: #3470FF;
color: white;
`

