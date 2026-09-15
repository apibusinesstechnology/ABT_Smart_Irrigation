import React from 'react';
import { render, screen } from '@testing-library/react';

describe('SMART Irrigation Frontend', () => {
  it('renders correctly', () => {
    render(<div>Hello Smart Irrigation</div>)
    expect(screen.getByText('Hello Smart Irrigation')).toBeInTheDocument()
  })
})
