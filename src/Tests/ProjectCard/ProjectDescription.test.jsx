import { render, screen, fireEvent } from '@testing-library/react';
import ProjectDescription from '../../components/ProjectCard/ProjectDescription';

describe('ProjectDescription', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(4); // >120 chars

    it('shows short description initially', () => {
        render(<ProjectDescription description={longText} />);
        expect(screen.getByText(/read more/i)).toBeInTheDocument();
        expect(screen.queryByText(longText)).not.toBeInTheDocument();
    });

    it('expands and collapses on button click', () => {
        render(<ProjectDescription description={longText} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByText(/read less/i)).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.queryByText(longText)).not.toBeInTheDocument();
    });

    it('shows full text if under 120 characters', () => {
        const shortText = 'Short description';
        render(<ProjectDescription description={shortText} />);
        expect(screen.getByText(shortText)).toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
