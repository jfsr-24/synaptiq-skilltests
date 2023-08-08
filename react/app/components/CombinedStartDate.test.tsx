import React from 'react';
import CombinedStartDate from './CombinedStartDate';
import { render, fireEvent } from '@testing-library/react';

jest.mock('../lib/getWeatherData', () => ({
  getWeatherData: jest.fn(() =>
    Promise.resolve({
      location: {
        name: 'Mock City',
        country: 'Mock Country',
      },
      forecast: {
        forecastday: [
          {
            date: '2023-08-10',
            day: {
              mintemp_c: 20,
              maxtemp_c: 30,
              condition: {
                text: 'Sunny',
                icon: 'sunny-icon',
              },
            },
            astro: {
              sunrise: '06:00 AM',
              sunset: '08:00 PM',
            },
          },
        ],
      },
    })
  ),
}));

describe('CombinedStartDate', () => {
  it('should render the component', async () => {
    const onDataReceived = jest.fn();
    const { getByLabelText, getByText } = render(
        <CombinedStartDate onDataReceived={onDataReceived} />
      );

    const datepicker = getByLabelText('Please choose a past date to search:');
    fireEvent.focus(datepicker);

    const selectedDate = new Date(2023, 7, 10);
    fireEvent.change(datepicker, { target: { value: selectedDate.toISOString().slice(0, 10) } });

    fireEvent.click(getByText('10'));

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('Mock City - Mock Country')).toBeInTheDocument();
    expect(getByText('Sunny')).toBeInTheDocument();
    expect(getByText('06:00 AM')).toBeInTheDocument();
    expect(getByText('08:00 PM')).toBeInTheDocument();
    expect(getByText('20 °C')).toBeInTheDocument();
    expect(getByText('30 °C')).toBeInTheDocument();

    expect(onDataReceived).toHaveBeenCalledWith({
      city: 'Mock City',
      country: 'Mock Country',
      date: '2023-08-10',
      minTempC: 20,
      maxTempC: 30,
      condition: 'Sunny',
      conditionIcon: 'sunny-icon',
      astroSunrise: '06:00 AM',
      astroSunset: '08:00 PM',
    });
  });
});