import { render, screen, fireEvent } from '@testing-library/react';
import NavbarToggle from '../../components/Navbar/NavbarToggle.jsx';

describe('NavbarToggle', () => {
    it('toggles icon when clicked', () => {
        let isOpen = false;
        const setIsOpen = (val) => (isOpen = val);

        const { rerender } = render(
            <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        );

        const toggleBtn = screen.getByLabelText(/toggle menu/i);
        fireEvent.click(toggleBtn);

        expect(isOpen).toBe(true);
    });
});
