import { render, screen } from '@testing-library/react';
import ProjectImage from '../../components/ProjectCard/ProjectImage';

describe('ProjectImage', () => {
    it('renders an image with correct src and alt', () => {
        render(<ProjectImage image="test.jpg" title="Test Project" />);
        const img = screen.getByAltText('Test Project');
        expect(img).toHaveAttribute('src', 'test.jpg');
    });
});
