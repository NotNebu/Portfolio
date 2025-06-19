import { render, screen } from '@testing-library/react';
import ProjectRaces from '../../components/ProjectCard/ProjectRaces';

describe('ProjectRaces', () => {
    it('renders race heading and known races', () => {
        render(<ProjectRaces races={['Orc', 'Elf']} />);
        expect(screen.getByText(/Races:/i)).toBeInTheDocument();
        expect(screen.getByText('Orc')).toBeInTheDocument();
        expect(screen.getByText('Elf')).toBeInTheDocument();
    });

    it('ignores unknown races', () => {
        render(<ProjectRaces races={['Orc', 'UnknownRace']} />);
        expect(screen.getByText('Orc')).toBeInTheDocument();
        expect(screen.queryByText('UnknownRace')).not.toBeInTheDocument();
    });

    it('returns null when no races provided', () => {
        const { container } = render(<ProjectRaces races={[]} />);
        expect(container.firstChild).toBeNull();
    });
});
