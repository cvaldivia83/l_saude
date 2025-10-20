"use client"

import styled from "styled-components"

const StyledAvatar = styled.div`
  width: ${({ theme }) => theme.spacing.m };
  height: ${({ theme }) => theme.spacing.m };
  padding: ${({ theme }) => theme.spacing.m };
  background: ${({ theme }) => theme.colors.primitives.emerald30 };
  border-radius: ${({ theme }) => theme.borderRadius.circle };
  color: ${({ theme }) => theme.colors.primitives.emerald70 };
  font-size: ${({ theme }) => theme.typography.text.textXl.fontSize };
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface AvatarProps {
  firstName: string;
}

const Avatar: React.FC<AvatarProps> = ({ firstName }) => {
  return (
    <StyledAvatar>
      {firstName[0]}
    </StyledAvatar>
  )
}


export default Avatar;