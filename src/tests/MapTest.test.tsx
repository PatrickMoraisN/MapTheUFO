import { render, screen } from '@testing-library/react';
import Map from '../components/Map';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map places={[]} />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correctly place', () => {
    const place = {
      id: '1',
      name: 'petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    render(<Map places={[place]} />);

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument();
  });
});
