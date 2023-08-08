import React from 'react';
import { Meta } from '@storybook/react';
import { AppProvider } from '@shopify/polaris';
import ContentWeather from '../app/components/ContentWeather'
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';

export default {
  title: 'Example/ContentWeather',
  component: ContentWeather,
  tags: ['autodocs'],
} as Meta;

const Template = (args: React.JSX.IntrinsicAttributes) => (
  <AppProvider i18n={enTranslations}>
    <ContentWeather {...args} />
  </AppProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithData = Template.bind({});
WithData.args = {
  receivedDataWeather: {
    city: 'New York',
    country: 'USA',
    date: '2023-08-07',
    minTempC: 20,
    maxTempC: 30,
    condition: 'Sunny',
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/night/263.png',
    astroSunrise: '06:00 AM',
    astroSunset: '08:00 PM',
  },
};