import { render, screen } from '@testing-library/react';
import FooterSocials from "../../components/Footer/FooterSocials.jsx";

describe('FooterSocials', () => {
    it('renders GitHub and LinkedIn links', () => {
        render(<FooterSocials />);
        const githubLink = screen.getByLabelText(/github/i);
        const linkedinLink = screen.getByLabelText(/linkedin/i);

        expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
        expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    });
});
