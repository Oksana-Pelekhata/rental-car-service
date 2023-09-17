import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';


export const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 541px;
  height: 100vh;
  max-height: 752px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const CloseModal = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px;
`;


export const ImgThumb = styled.div`
position: relative;
height: 248px;
width: 461px;
margin-bottom: 14px;
border-radius: 14px;
overflow: hidden;
`

export const Img = styled.img`
// position: absolute;
// top: 0;
// left: -50px;
width:  100%;
height: 100%;
`

export const CardHeaderThumb = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 8px;
`

export const CardHeader = styled.p`
display: inline-block;
font-family: manrope;
font-size: 18px;
font-weight: 500;
line-height: calc(24/16);
color: #121417;

`

export const CardModel = styled.span`
color: #3470FF;
`
export const DescriptionThumb = styled.div`
display: flex;
flex-wrap: wrap;
// gap: 12px;
height: 18px;
white-space: nowrap;
overflow: hidden;
`
export const DescriptionWrapper = styled.div`

&:not(:last-child)::after {
    content: '';
    height: 12px;
    border: 1px solid rgba(18, 20, 23, 0.2);
    margin-left: 6px;
  }
  
  &:not(:last-child) {
    margin-right: 6px;
  }
`

export const About = styled.p`
margin-bottom: 29px;
margin-top: 14px;

font-family: manrope;
font-size: 14px;
font-weight: 400;
line-height: calc(20/14);
color: #121417;
`

export const Description = styled.p`
display: inline-block;
font-family: manrope;
font-size: 12px;
font-weight: 400;
line-height: calc(18/12);
color: rgba(18, 20, 23, 0.5);
`
export const SubTitle = styled.h2`
margin-bottm: 8px;

font-family: manrope;
font-size: 14px;
font-weight: 500;
line-height: calc(20/14);
`
export const Thumb = styled.div`
display: inline-block;

padding: 7px 14px;

border-radius: 35px;
background-color: #F9F9F9;
`

export const ThumbText = styled.p`
font-family: montserrat;
font-size: 12px;
font-weight: 400;
line-height: calc(18/12);
`

export const Span = styled.span`
font-family: montserrat;
font-size: 12px;
font-weight: 600;
line-height: calc(18/12);
color: #3470FF;
`