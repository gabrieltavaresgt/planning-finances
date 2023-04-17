import React from 'react';
import * as Styled from './styles';

interface HeaderProps {
  children: React.ReactNode;
  colorTitle?: string;
}

export const Header = ({ children, colorTitle }: HeaderProps) => (
  <Styled.Title colorTitle={colorTitle}>{children}</Styled.Title>
);
