const apiKey = 'LQCIT1QDVJVJ0KCG';

export const fetchIfix = async () => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IFIX&apikey=${apiKey}`);
    const data = await response.json();
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const previousDay = new Date(lastRefreshed);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayFormatted = previousDay.toISOString().split('T')[0];
    const ifixValue = data['Time Series (Daily)'][lastRefreshed]['4. close'];
    const ifixPreviousValue = data['Time Series (Daily)'][previousDayFormatted]['4. close'];
    return {
      value: ifixValue,
      variation: ifixValue - ifixPreviousValue,
    };
  } catch (error) {
    console.error('Erro ao buscar o IFIX:', error);
    return { value: null, variation: null };
  }
};