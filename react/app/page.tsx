'use client'

import Header from './components/Header'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import ContentWeather from './components/ContentWeather';
import React from 'react';


export default function Home() {

  return <AppProvider i18n={enTranslations}>
    <main>
       <Header/>
       <ContentWeather/>
    </main>
  </AppProvider>;
}
