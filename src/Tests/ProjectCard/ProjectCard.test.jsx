import { render, screen } from '@testing-library/react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

describe('ProjectCard', () => {
    const mockProps = {
        title: 'Azeroth',
        description: 'An app to build WoW characters',
        image: 'azeroth.jpg',
        tech: ['React', 'Tailwind', 'Node.js'],
        repoLink: 'https://github.com/NotNebu/azeroth-builder',
        links: [{ label: 'Live Demo', url: 'https://azeroth.app' }],
        races: ['Orc', 'Elf'],
        classes: ['Warrior', 'Mage'],
    };

    it('renders project title and description', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText(/Azeroth/i)).toBeInTheDocument();
        expect(screen.getByText(/WoW characters/i)).toBeInTheDocument();
    });

    it('renders all tech stack items', () => {
        render(<ProjectCard {...mockProps} />);
        mockProps.tech.forEach((tech) => {
            expect(screen.getByText(tech)).toBeInTheDocument();
        });
    });

    it('renders repository link', () => {
        render(<ProjectCard {...mockProps} />);
        expect(
            screen.getByRole('link', { name: /source code/i })
        ).toHaveAttribute('href', expect.stringContaining('github.com'));
    });

    it('renders external project links', () => {
        render(<ProjectCard {...mockProps} />);
        expect(
            screen.getByRole('link', { name: /live demo/i })
        ).toHaveAttribute('href', 'https://azeroth.app');
    });

    it('renders races and classes', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText('Orc')).toBeInTheDocument();
        expect(screen.getByText('Elf')).toBeInTheDocument();
        expect(screen.getByText('Warrior')).toBeInTheDocument();
        expect(screen.getByText('Mage')).toBeInTheDocument();
    });
});
