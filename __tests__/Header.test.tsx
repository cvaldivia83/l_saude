import Header from '../src/components/Header'
import {render, screen } from '../src/test/render';
import userEvent from '@testing-library/user-event';

describe('<Header />', () => {
  it('renderiza Header corretamente', () => {
    render(<Header />);
    const header = screen.getByRole('navigation');
    expect(header).toBeInTheDocument();
  })

  it('links sao navegaveis com tecla TAB', () => {
    render(<Header />);
    const atendimento = screen.getByRole('link', { name: /atendimento/i });
    const sobre = screen.getByRole('link', { name: /sobre/i });

    expect(atendimento).toHaveProperty('href');
    expect(sobre).toHaveProperty('href');
  })
})
