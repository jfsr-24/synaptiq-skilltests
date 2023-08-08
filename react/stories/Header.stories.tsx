import React from 'react';
import { Meta } from '@storybook/react';
import Header from '../app/components/Header'

export default {
  title: 'ReactTest/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomLogo = Template.bind({});
WithCustomLogo.args = {
  logoSrc: 'https://www.example.com/custom-logo.png',
};

export const WithAuthorName = Template.bind({});
WithAuthorName.args = {
  authorName: 'Peter Parker',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  logoSrc: 'https://www.example.com/custom-logo.png',
  authorName: 'Alice Johnson',
  styles: {
    background: 'linear-gradient(to right, #FFD700, #FFA500)',
    textColor: '#FFFFFF',
  },
};