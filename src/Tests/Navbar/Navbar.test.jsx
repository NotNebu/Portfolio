import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar.jsx';

describe('Navbar', () => {
    it('renders logo and nav toggle', () => {
        render(<Navbar />);
        expect(screen.getByText(/Alexander/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument();
    });

    it('toggles nav menu on button click', () => {
        render(<Navbar />);
        const toggleBtn = screen.getByLabelText(/toggle menu/i);
        fireEvent.click(toggleBtn);
        expect(screen.getByText(/About/i)).toBeInTheDocument();
    });
});
