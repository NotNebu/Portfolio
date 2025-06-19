import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer/Footer.jsx';

describe('Footer', () => {
    it('renders footer text with name', () => {
        render(<Footer />);
        expect(
            screen.getByText(/Alexander Jannik Dahl Jensen/i)
        ).toBeInTheDocument();
    });

    it('renders social links', () => {
        render(<Footer />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(2);
    });
});
