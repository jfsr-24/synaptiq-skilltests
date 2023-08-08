import { Card, EmptyState, Grid, LegacyCard, Page } from '@shopify/polaris'
import React, { useState } from 'react'
import CombinedStartDate from './CombinedStartDate'

function ContentWeather() {
  const [receivedDataWeather, setReceivedDataWeather] = useState(Object);

  const handleDataWeather = (data: any) => {
    setReceivedDataWeather(data);
  };

  const labels = {
    resultsFor: "Results for:",
    condition: "Condition",
    location: "Location",
    sunrise: "Sunrise",
    sunset: "Sunset",
    minimumTemp: "Minimum Temp (C)",
    maximumTemp: "Maximum Temp (C)",
    defaultTemperature: "°C",
    searchIPMsg: "Search data based on your current IP Address",
    searchHeadLabel: "Search your historical weather information",
  };

  const {
    resultsFor,
    condition,
    location,
    sunrise,
    sunset,
    minimumTemp,
    maximumTemp,
    defaultTemperature,
    searchIPMsg,
    searchHeadLabel,
  } = labels;
  

  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 3, lg: 6, xl: 6}}>
          <LegacyCard >
          <p className='pt-12'></p>
          <EmptyState
            heading={searchHeadLabel}            
            image="https://cdn.weatherapi.com/weather/64x64/night/263.png"
            footerContent={ <p className='pb-9'></p>}
          >
            <p className='mb-12'>{searchIPMsg}</p>
            <CombinedStartDate onDataReceived={handleDataWeather}/>
          </EmptyState>
        </LegacyCard>
        </Grid.Cell>

        <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 3, lg: 6, xl: 6}}>
          { receivedDataWeather &&
            <LegacyCard title={resultsFor} sectioned>
              <p className='text-cyan-900 font-bold text-lg mb-2'>{receivedDataWeather?.date} </p>

              <Card padding={{xs: '4', sm: '5'}}>
                <div className='flex flex-row items-center'>
                  
                  <img
                      src={receivedDataWeather?.conditionIcon} 
                      alt={"Weather Image"} 
                      className="w-20"
                  />
                  <p><b>{condition}:</b> {receivedDataWeather?.condition}</p>
                </div>
              </Card>

              <Card>
                <p><b>{location}:</b> {receivedDataWeather?.city} - {receivedDataWeather?.country}</p>
              </Card>

              <Card>
                <p><b>{sunrise}:</b> {receivedDataWeather?.astroSunrise}</p> 
                <p><b>{sunset}:</b> {receivedDataWeather?.astroSunset}</p> 
              </Card>

              <Card>
                <p><b>{minimumTemp}:</b> {receivedDataWeather?.minTempC} {defaultTemperature}</p> 
                <p><b>{maximumTemp}:</b> {receivedDataWeather?.maxTempC} {defaultTemperature}</p> 
              </Card>

            </LegacyCard>
          }
        </Grid.Cell>
      </Grid>
    </Page>
  )
}

export default ContentWeather