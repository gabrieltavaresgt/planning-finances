import React from 'react';
import * as Styled from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <Styled.Title>{children}</Styled.Title>
);
