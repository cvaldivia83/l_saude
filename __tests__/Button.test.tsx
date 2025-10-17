import Button from '../src/components/Button';
import {render, screen } from '@testing-library/react';

describe('<Button />', () => {
  it('deve renderizar o texto do botão corretamente', () => {
    render(<Button type='button'>Clique</Button>);

    expect(screen.getByRole('button', { name: /clique/i })).toBeInTheDocument();
  })

  it('deve usar HTMl semantico <button>', () => {
    const { container } = render(<Button type='button' />);
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    
  })

  it('deve aplicar estilo primário por padrão', () => {
    render(<Button type='button'>Primary</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary/i });
    expect(buttonElement).toHaveStyleRule('background-color', '#018762');
    expect(buttonElement).toHaveStyleRule('color', '#FFFFFF');
  })

  it('deve aceitar o atributo disabled', () => {
    render(<Button disabled type='button'>Aceitar</Button>);
    const btn = screen.getByRole('button', { name: /aceitar/i });

    expect(btn).toHaveAttribute('disabled');
  })
})