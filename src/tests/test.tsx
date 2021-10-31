import { render, screen } from '@testing-library/react';

import Main from '../components/Main';

describe('Testing boilerplate', () => {
  it('shoul work', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /boilerplate/i }));
  });
});
