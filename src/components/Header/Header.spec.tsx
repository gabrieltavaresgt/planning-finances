import { render, screen } from '@testing-library/react';
import { Header } from '.';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header>{'Salve'}</Header>);

    expect(screen.getByText('Salve')).toBeInTheDocument();
  });
});
