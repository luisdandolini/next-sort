const apiKey = 'LQCIT1QDVJVJ0KCG';

export const fetchBrco11 = async () => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BRCO11.SAO&apikey=${apiKey}`);
    const data = await response.json();
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const previousDay = new Date(lastRefreshed);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayFormatted = previousDay.toISOString().split('T')[0];
    const brco11Value = data['Time Series (Daily)'][lastRefreshed]['4. close'];
    const brco11PreviousValue = data['Time Series (Daily)'][previousDayFormatted]['4. close'];
    const brco11Variation = brco11Value - brco11PreviousValue;
    return { value: brco11Value, variation: brco11Variation };
  } catch (error) {
    console.error('Erro ao buscar o BRCO11:', error);
    return { value: null, variation: null };
  }
};