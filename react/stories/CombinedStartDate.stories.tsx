import React from 'react';
import { Meta } from '@storybook/react';
import CombinedStartDate from '../app/components/CombinedStartDate';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';


export default {
  title: 'Shopify/CombinedStartDate',
  component: CombinedStartDate,
  tags: ['autodocs'],
} as Meta;

const Template = (args: {onDataReceived: any} | any) => (
    <AppProvider i18n={enTranslations}>
      <CombinedStartDate {...args} />
    </AppProvider>
  );

export const Default = Template.bind({});
Default.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
    return {
        city: 'Bucaramanga',
        country: 'Colombia',
        date: '2023-08-08',
        minTempC: 25,
        maxTempC: 30,
        condition: 'Sunny',
        conditionIcon: 'sunny',
        astroSunrise: '06:00 AM',
        astroSunset: '08:00 PM',
    };
  },
};

export const WithCustomDate = Template.bind({});
WithCustomDate.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
  },
  selectedDate: new Date('2023-08-08'),
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
  },
  size: 'large',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
  },
  size: 'small',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
  },
  placeholder: 'Select a date',
};

export const Disabled = Template.bind({});
Disabled.args = {
  onDataReceived: (data: any) => {
    console.log('Received data:', data);
  },
  disabled: true,
};