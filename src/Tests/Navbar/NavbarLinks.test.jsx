import { render, screen, fireEvent } from '@testing-library/react';
import NavbarLinks from '../../components/Navbar/NavbarLinks.jsx';

describe('NavbarLinks', () => {
    it('renders all nav items', () => {
        render(<NavbarLinks isOpen={true} handleScroll={() => {}} />);
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Skills/i)).toBeInTheDocument();
        expect(screen.getByText(/Tech Stack/i)).toBeInTheDocument();
        expect(screen.getByText(/Projects/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('calls handleScroll when a button is clicked', () => {
        const handleScroll = vi.fn();
        render(<NavbarLinks isOpen={true} handleScroll={handleScroll} />);
        const aboutBtn = screen.getByText(/About/i);
        fireEvent.click(aboutBtn);
        expect(handleScroll).toHaveBeenCalledWith('about');
    });
});
