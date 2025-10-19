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

  it('nav tem aria-label para links internos', () => {
    render(<Footer />);
    const nav = screen.getByRole('navigation', { name: /navegacao links/i});
    expect(nav).toBeInTheDocument();
  })

  it('nav tem aria-label para links de midia social', () => {
    render(<Footer />);
    const socialNav = screen.getByRole('navigation', { name: /social media links/i});
    expect(socialNav).toBeInTheDocument();
  })

  it('nav links devem estar organizados em lista', () => {
    const { container } = render(<Footer />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
  })

  it('links para midias sociais devem ter aria-label descritivos', () => {
    render(<Footer />);

    const linkedin = screen.getByRole('link', { name: /siga a gente no linkedin/i});
    const facebook = screen.getByRole('link', { name: /siga a gente no facebook/i});
    const instagram = screen.getByRole('link', { name: /siga a gente no instagram/i});
    const email = screen.getByRole('link', { name: /mande um email pra gente/i});

    expect(linkedin).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(facebook).toBeInTheDocument();
  })
})
