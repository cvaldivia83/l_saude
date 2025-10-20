import Button from '../src/components/Button';
import {render, screen } from '../src/test/render';
import userEvent from '@testing-library/user-event';


describe('<Button />', () => {
  it('deve renderizar o texto do botão corretamente', () => {
    render(<Button>Clique</Button>);

    expect(screen.getByRole('button', { name: /clique/i })).toBeInTheDocument();
  })

  it('usa tag HTML semantica <button>', () => {
    const { container } = render(<Button />);
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    
  })

  it('aplica estilo primário por padrão', () => {
    render(<Button>Primary</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary/i });
    expect(buttonElement).toHaveStyleRule('background-color', 'emerald60');
    expect(buttonElement).toHaveStyleRule('color', 'gray10');
  })

  it('aceita o atributo disabled', () => {
    render(<Button disabled>Aceitar</Button>);
    const btn = screen.getByRole('button', { name: /aceitar/i });

    expect(btn).toHaveAttribute('disabled');
  })

  it("tem type = button por padrao", () => {
    const { container } = render(<Button>Clique</Button>);
    expect(container.querySelector('button')).toHaveAttribute('type', 'button');
  })

  it('foca no botão com a tecla tab', async () => {
    render(<Button>Clique</Button>);
    const button = screen.getByRole('button');

    await userEvent.tab();
    expect(button).toHaveFocus();
  })

  it('tem cursor pointer', () => {
    const { container } = render(<Button>Clique</Button>);
    const btn = container.querySelector('button');

    expect(btn).toHaveStyle('cursor: pointer');
  })
})