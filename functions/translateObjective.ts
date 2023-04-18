type TranslationMap = {
  [key: string]: string;
};


const translationMap: TranslationMap = {
  'sell': 'VENDA',
  'rent': 'ALUGUEL',
};

export const translateObjective = (objective: string) => {
  return translationMap[objective] || objective;
};