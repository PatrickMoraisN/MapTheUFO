import { render, screen } from '@testing-library/react';

import Main from '../components/Main';

describe('Testing boilerplate', () => {
  it('should work', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /maptheufo/i }));
  });
});
