import styled from 'styled-components';

type TitleProps = {
  colorTitle?: string;
};

const Title = styled.h1<TitleProps>`
  color: ${({ colorTitle }) => colorTitle || 'red'};
`;

export { Title };
