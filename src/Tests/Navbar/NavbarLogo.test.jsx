import { render, screen } from '@testing-library/react';
import NavbarLogo from '../../components/Navbar/NavbarLogo.jsx';

describe('NavbarLogo', () => {
    it('renders the logo text', () => {
        render(<NavbarLogo />);
        expect(screen.getByText(/Alexander J\.? D\.? Jensen/i)).toBeInTheDocument();
    });
});
