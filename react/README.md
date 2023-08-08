# Synaptiq React Skills Test

## Your mission

Create a new "combined date" control as described in the shopify polaris "patterns"
documentation at https://polaris.shopify.com/patterns/date-picking/single-date

- You should build off the framework and tools in this repo, namely:
  - yarn
  - storybook
  - next.js
  - react
  - tailwind.css
  - typescript
- You may pick any of the patterns described (single-date, date range or date list):
- You should include your component in a sample next.js page added to this project
- Your example page can do anything you want, so show off what it can do!
- Your component should be added to the storybook in this project
- Your component should be tested and demonstrate your command of css, html and react
- Your should add (and document) the commands used to run your tests
- Your component should meet the usability guidelines from polaris
- You should update this readme explaining what usability features and capabilities you have implemented
- You should fork this repository and open a pull request against it with your changes.
- You should be prepared to discuss your changes in detail and explain why they are great.

## Solution: Usability and Capabilities:

- The component is using the “single date” pattern https://polaris.shopify.com/patterns/date-picking/single-date
- Calendar is only enabled for current month, since the Weather api has a restriction for free accounts (Only permits get data from current month).
- When the user change the date using the datepicker, the Weather api is called to get the historic data for the specified date. By default the app is searching the info for the current date.
   - First the API https://api.ipify.org is called to get the IP from the user
   - Then, the Weather API https://weatherapi-com.p.rapidapi.com/history.json is called to get the historic info for weather based on IP ( Location) and specified date.
- The information includes data about location, condition, sunrise, sunset and min/max temp is presented to the user based on the selected date. (The information is defined in InfoWheather interface)

```
interface InfoWheather {
    astroSunrise: string,
    astroSunset: string,
    city: string,
    condition: string,
    conditionIcon: string,
    country: string,
    date: string,
    maxTempC: number,
    minTempC: number
}
```

## Future Improvements:
- Add login feature to populate the avatar initials based on logged user.
- Add profile by user to set the custom weather api key from each user instead of hardcoded demo api key.
- Cache responses to avoid unnecessary request for previous request with same date.
- Add loading spinner, while api is fetching data. 
- Improve controls for storybook and more variations based on props.
- Improve tests for all the components. I've created a base for the SingleDate component with a mock, but after execute "yarn test" script, is not running and test failing because of that.

Sincerely, John.
Thanks



