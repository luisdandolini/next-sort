let ifixCache = {
  value: null,
  variation: null,
  timestamp: null
};

const CACHE_DURATION = 1000 * 60 * 60 * 5; // 5 horas em milissegundos

const apiKey = 'LQCIT1QDVJVJ0KCG';

let callCount = 0;
let currentDate = new Date().toISOString().split('T')[0];

export const fetchIfix = async () => {
  const today = new Date().toISOString().split('T')[0];

  if (currentDate !== today) {
    currentDate = today;
    callCount = 0;
  }

  if (callCount >= 4) {
    console.warn('Limite de 4 chamadas por dia atingido');
    return { value: null, variation: null };
  }

  try {
    const currentTime = new Date().getTime();

    if (ifixCache.timestamp && (currentTime - ifixCache.timestamp) <= CACHE_DURATION) {
      // Retorna os dados em cache se ainda estiverem válidos
      return {
        value: ifixCache.value,
        variation: ifixCache.variation
      };
    }

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IFIX&apikey=${apiKey}`);
    const data = await response.json();
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const previousDay = new Date(lastRefreshed);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayFormatted = previousDay.toISOString().split('T')[0];
    const ifixValue = data['Time Series (Daily)'][lastRefreshed]['4. close'];
    const ifixPreviousValue = data['Time Series (Daily)'][previousDayFormatted]['4. close'];

    const result = {
      value: ifixValue,
      variation: ifixValue - ifixPreviousValue
    };

    // Armazena os dados e a hora atual no cache
    ifixCache = {
      value: result.value,
      variation: result.variation,
      timestamp: currentTime
    };

    callCount++;

    return result;
  } catch (error) {
    console.error('Erro ao buscar o IFIX:', error);
    return { value: null, variation: null };
  }
};
