import Footer from '../src/components/Footer';
import {render, screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('renderiza componente corretamente', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  })

  it('deve usar HTMl semantico <footer>', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  })

  it('nav deve ter aria-label Footer', () => {
    render(<Footer />);
    const nav = screen.getByRole('navigation', { name: /footer/i});
    expect(nav).toBeInTheDocument();
  })

  it('nav links devem estar organizados em lista', () => {
    const { container } = render(<Footer />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
  })

  it('links para midias sociais devem ter aria-label descritivos', () => {
    render(<Footer />);
    const twitter = screen.getByRole('link', { name: /siga a gente no twitter/i});
    const instagram = screen.getByRole('link', { name: /siga a gente no instagram/i});
    expect(twitter).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();
  })
})
