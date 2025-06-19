import { render, screen } from '@testing-library/react';
import ProjectTechStack from '../../components/ProjectCard/ProjectTechStack';

describe('ProjectTechStack', () => {
    it('renders each tech item as a badge', () => {
        const tech = ['React', 'Tailwind', 'Vitest'];
        render(<ProjectTechStack tech={tech} />);

        tech.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('renders nothing if tech array is empty', () => {
        const { container } = render(<ProjectTechStack tech={[]} />);
        expect(container.querySelectorAll('span').length).toBe(0);
    });
});
