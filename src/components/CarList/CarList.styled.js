import styled from 'styled-components';

export const CardList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 29px;
`

export const CardItem = styled.li`
// width: 268px;
// height: 426px;
width: calc((100% - 87px)/4);
`

export const ImgThumb = styled.div`
position: relative;
height: 268px;
margin-bottom: 14px;
border-radius: 14px;
overflow: hidden;
`

export const Img = styled.img`
position: absolute;
top: 0;
left: -50px;
width: 400px;
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
font-size: 16px;
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

export const Description = styled.p`
display: inline-block;
font-family: manrope;
font-size: 12px;
font-weight: 400;
line-height: calc(18/12);
color: rgba(18, 20, 23, 0.5);

`

export const LearnMoreBtn = styled.button`
margin-top: 28px;
 padding-top: 12px;
 padding-bottom: 12px;
    border-radius: 12px;
    border: transparent;
    width: 100%;

    font-family: manrope;
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    text-align: center;
    color: #fff;
    background: #3470FF;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #0B44CD;
        }
`