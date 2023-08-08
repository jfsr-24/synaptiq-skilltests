"use client"

import React from "react";
import { Box, Card, DatePicker, Icon, Popover, TextField, VerticalStack } from "@shopify/polaris"
import { CalendarMinor } from "@shopify/polaris-icons";
import { useEffect, useState } from "react";
import { getWeatherData } from "../lib/getWeatherData";

function CombinedStartDate({ onDataReceived }) {

    const datepickerDefaultLabel = "Please choose a past date to search:";
    const notSpecifiedLabel = "Not Specified";

    const [visible, setVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [{ month, year }, setDate] = useState({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
    });

    const formattedValue = selectedDate.toISOString().slice(0, 10);

    function handleOnClose({ }) {
        setVisible(false);
    }

    function handleMonthChange(month: number, year: number) {
        setDate({ month, year });
    }

    function handleDateSelection({ end: newSelectedDate }) {
        setSelectedDate(newSelectedDate);
        setVisible(false);
    }

    useEffect(() => {
        if (selectedDate) {
            setDate({
                month: selectedDate.getMonth(),
                year: selectedDate.getFullYear(),
            });

            getWeatherDataList();
        }
    }, [selectedDate]);

    useEffect(() => {
      getWeatherDataList();
    }, []);

    function getWeatherDataList(){
      const dateFilter = selectedDate.toISOString().split('T')[0];
      
      getWeatherData(dateFilter).then((data) => {
        const resultsWeather: InfoWheather =  prepareResultData(data);
        onDataReceived(resultsWeather);
      });
    }

    function prepareResultData(info: any) {

      const preparedResultsDataWeather: InfoWheather =  {
        city: info?.location?.name ?? notSpecifiedLabel,
        country: info?.location?.country ?? notSpecifiedLabel,
        date: info?.forecast?.forecastday[0].date ?? notSpecifiedLabel,
        minTempC: info?.forecast?.forecastday[0].day?.mintemp_c ?? 0,
        maxTempC: info?.forecast?.forecastday[0].day?.maxtemp_c ?? 0,
        condition: info?.forecast?.forecastday[0].day?.condition?.text ?? notSpecifiedLabel,
        conditionIcon: info?.forecast?.forecastday[0].day?.condition?.icon ?? notSpecifiedLabel,
        astroSunrise: info?.forecast?.forecastday[0].astro?.sunrise ?? notSpecifiedLabel,
        astroSunset: info?.forecast?.forecastday[0].astro?.sunset ?? notSpecifiedLabel,
      }

      return preparedResultsDataWeather;
    }

  return (
    <VerticalStack inlineAlign="center" gap="4">
      <Box minWidth="276px">
        <Popover
          active={visible}
          autofocusTarget="none"
          preferredAlignment="left"
          fullWidth
          preferInputActivator={false}
          preferredPosition="below"
          preventCloseOnChildOverlayClick
          onClose={handleOnClose}
          activator={
            <TextField
              role="combobox"
              label={datepickerDefaultLabel}
              prefix={<Icon source={CalendarMinor} />}
              value={formattedValue}
              onFocus={() => setVisible(true)}
              autoComplete="off"
            />
          }
        >
          <Card>
            <DatePicker
              month={month}
              year={year}
              selected={selectedDate}
              onMonthChange={handleMonthChange}
              onChange={handleDateSelection}
              disableDatesAfter={new Date()}
              disableDatesBefore={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
            />
          </Card>
        </Popover>
      </Box>
    </VerticalStack>
  )
}

export default CombinedStartDate