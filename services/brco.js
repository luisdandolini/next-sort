const apiKey = 'LQCIT1QDVJVJ0KCG';

let brco11Cache = {
  value: null,
  variation: null,
  timestamp: null
};

let callCountBrco11 = 0;
let currentDateBrco11 = new Date().toISOString().split('T')[0];

const CACHE_DURATION_BRCO11 = 1000 * 60 * 60 * 6; // 6 horas em milissegundos

export const fetchBrco11 = async () => {
  const today = new Date().toISOString().split('T')[0];

  if (currentDateBrco11 !== today) {
    currentDateBrco11 = today;
    callCountBrco11 = 0;
  }

  if (callCountBrco11 >= 4) {
    console.warn('Limite de 4 chamadas por dia atingido');
    return { value: null, variation: null };
  }

  try {
    const currentTime = new Date().getTime();

    if (brco11Cache.timestamp && (currentTime - brco11Cache.timestamp) <= CACHE_DURATION_BRCO11) {
      // Retorna os dados em cache se ainda estiverem válidos
      return {
        value: brco11Cache.value,
        variation: brco11Cache.variation
      };
    }

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BRCO11.SAO&apikey=${apiKey}`);
    const data = await response.json();
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const previousDay = new Date(lastRefreshed);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayFormatted = previousDay.toISOString().split('T')[0];
    const brco11Value = data['Time Series (Daily)'][lastRefreshed]['4. close'];
    const brco11PreviousValue = data['Time Series (Daily)'][previousDayFormatted]['4. close'];
    const brco11Variation = brco11Value - brco11PreviousValue;

    const result = { value: brco11Value, variation: brco11Variation };

    // Armazena os dados e a hora atual no cache
    brco11Cache = {
      value: result.value,
      variation: result.variation,
      timestamp: currentTime
    };

    callCountBrco11++;

    return result;
  } catch (error) {
    console.error('Erro ao buscar o BRCO11:', error);
    return { value: null, variation: null };
  }
};
