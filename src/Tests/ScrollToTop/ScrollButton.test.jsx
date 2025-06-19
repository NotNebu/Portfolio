import { render, screen, fireEvent } from '@testing-library/react';
import ScrollButton from '../../components/ScrollToTop/ScrollButton';

describe('ScrollButton', () => {
    it('is visible when visible=true', () => {
        render(<ScrollButton visible={true} onClick={() => {}} />);
        const button = screen.getByRole('button', { name: /scroll to top/i });
        expect(button).toHaveClass('opacity-100');
    });

    it('is hidden when visible=false', () => {
        render(<ScrollButton visible={false} onClick={() => {}} />);
        const button = screen.getByRole('button', { name: /scroll to top/i });
        expect(button).toHaveClass('opacity-0');
    });

    it('calls onClick when clicked', () => {
        const onClick = vi.fn();
        render(<ScrollButton visible={true} onClick={onClick} />);
        const button = screen.getByRole('button', { name: /scroll to top/i });
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
