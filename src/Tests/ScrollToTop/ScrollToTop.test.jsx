import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

describe('ScrollToTop', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            configurable: true,
            value: 0,
        });

        window.scrollTo = vi.fn();
    });

    it('shows the button after scrolling down', () => {
        render(<ScrollToTop />);
        window.scrollY = 400;
        fireEvent.scroll(window); 
        const button = screen.getByRole('button', { name: /scroll to top/i });
        expect(button).toHaveClass('opacity-100');
    });

    it('hides the button if scroll is less than 300', () => {
        render(<ScrollToTop />);
        window.scrollY = 100;
        fireEvent.scroll(window);
        const button = screen.getByRole('button', { name: /scroll to top/i });
        expect(button).toHaveClass('opacity-0');
    });

    it('scrolls to top when clicked', () => {
        render(<ScrollToTop />);
        window.scrollY = 400;
        fireEvent.scroll(window);
        const button = screen.getByRole('button', { name: /scroll to top/i });
        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});
