import { render, screen } from '@testing-library/react';
import ProjectClasses from '../../components/ProjectCard/ProjectClasses';

describe('ProjectClasses', () => {
    it('renders with known class names', () => {
        const classes = ['Warrior', 'Mage', 'Rogue'];
        render(<ProjectClasses classes={classes} />);

        expect(screen.getByText(/Classes:/i)).toBeInTheDocument();
        expect(screen.getByText('Warrior')).toBeInTheDocument();
        expect(screen.getByText('Mage')).toBeInTheDocument();
        expect(screen.getByText('Rogue')).toBeInTheDocument();
    });

    it('renders the correct number of items', () => {
        const classes = ['Warrior', 'Mage'];
        render(<ProjectClasses classes={classes} />);
        const tags = screen.getAllByText(/Warrior|Mage/);
        expect(tags.length).toBe(2);
    });

    it('returns null when classes array is empty', () => {
        const { container } = render(<ProjectClasses classes={[]} />);
        expect(container.firstChild).toBeNull();
    });

    it('ignores unknown class names', () => {
        const classes = ['Warrior', 'UnknownClass'];
        render(<ProjectClasses classes={classes} />);
        expect(screen.getByText('Warrior')).toBeInTheDocument();
        expect(screen.queryByText('UnknownClass')).not.toBeInTheDocument();
    });
});
