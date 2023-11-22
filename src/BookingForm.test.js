import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './Components/BookingForm';

test('Submits form with correct data', () => {
  // Mock the necessary props
  const mockTimes = () => {
    return Array.from({length: 6}, (_, i) => ({value: `${i + 17}:00`, disabled: Math.random() < 0.5}))
  };
  const mockday_generator = Array.from({length: 31}, (_, i) => ({date:new Date().addDays(i), times: mockTimes()}))
  const mockState = {
    selectedDate: new Date(),
    selectedTime: "19:00",
    availableTimes: mockday_generator,
  };
  const mockDispatch = jest.fn();

  // Render the BookingForm with the mocked props
  render(<BookingForm state={mockState} dispatch={mockDispatch} />);

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText('Select Date:'), { target: { value: mockState.selectedDate.toISOString() } });
  fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: mockState.selectedTime } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'birthday' } });
  fireEvent.change(screen.getByLabelText('First name:'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'john@mail.com' } });
  // ... fill in other form fields ...

  // Submit the form
  fireEvent.submit(screen.getByRole('button', { name: /Make your Reservation/i }));
});
