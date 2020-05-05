import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  background-color: ${(props) => props.theme.colors.primary};
`

export const InnerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const InsideHeading = styled.h1`
  color: #fff;
  font-size: 5vw;
`
