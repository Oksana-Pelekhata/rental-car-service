import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: scroll;
`
export const ModalBox = styled.div`
border-radius: 24px;

max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);

`

