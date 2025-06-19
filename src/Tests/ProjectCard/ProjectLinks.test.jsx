import { render, screen } from '@testing-library/react';
import ProjectLinks from '../../components/ProjectCard/ProjectLinks';

describe('ProjectLinks', () => {
    const links = [
        { label: 'Live Demo', url: 'https://demo.com' },
        { label: 'Docs', url: 'https://docs.com' },
    ];

    it('renders links correctly', () => {
        render(<ProjectLinks links={links} />);
        expect(screen.getByText(/Live Demo/i)).toHaveAttribute('href', 'https://demo.com');
        expect(screen.getByText(/Docs/i)).toHaveAttribute('href', 'https://docs.com');
    });

    it('renders nothing if links are empty', () => {
        const { container } = render(<ProjectLinks links={[]} />);
        expect(container.firstChild).toBeNull();
    });
});
