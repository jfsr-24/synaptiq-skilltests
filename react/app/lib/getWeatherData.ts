  const getIpAddress = async () => {
    const baseUrlIpify = 'https://api.ipify.org';
    const urlIpify = baseUrlIpify+ '/?format=json';
    const optionsIpify = {
      method: 'GET',
    };
  
    try {
      const response = await fetch(urlIpify, optionsIpify);
      const resultIp = await response.json();
      return resultIp?.ip || '';
    } catch (error) {
      console.error(error);
      return '';
    }
  };
  
  const fetchWeatherData = async (url: string, options: object) => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  export const getWeatherData = async (date: string) => {
    try {
      const ipAddress = await getIpAddress();
      if (!ipAddress) {
        return {};
      }
  
      const urlWeatherBaseUrl = 'https://weatherapi-com.p.rapidapi.com/history.json';
      const rapidApiKey = '8e958a8896msh7943ee44962e43bp16d2b3jsnb2b6fcd6ecd5';
      const rapidApiHost = 'weatherapi-com.p.rapidapi.com';
      const urlWeatherApi = `${urlWeatherBaseUrl}?q=${ipAddress}&dt=${date}&lang=en`;
      
      const optionsWeatherApi = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': rapidApiHost,
        },
      };
      
      const result = await fetchWeatherData(urlWeatherApi, optionsWeatherApi);
      return result;
    } catch (error) {
      console.error(error);
      return {};
    }
  };