'use client'

import styled from "styled-components"

const StyledDivider = styled.hr`
  width: 100%;
  height: 1px;
  color: #80CAB1;
  background-color: #80CAB1;
  border: none;
`

const Divider = () => {

  return (
  <StyledDivider></StyledDivider>
  )
}

export default Divider;