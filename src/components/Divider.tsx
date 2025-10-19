'use client'

import styled from "styled-components"

const StyledDivider = styled.hr`
  width: 100%;
  height: 1px;
  color: ${({ theme}) => `${theme.colors.primitives.emerald30}` };
  background-color: ${({ theme}) => `${theme.colors.primitives.emerald30}` };
  border: none;
  margin: 32px 0;
`

const Divider = () => {

  return (
  <StyledDivider></StyledDivider>
  )
}

export default Divider;