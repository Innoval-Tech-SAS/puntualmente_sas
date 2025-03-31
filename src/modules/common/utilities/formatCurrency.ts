const formatCurrency = (
    value: number,
    currency: string = "COP",
    locale: string = "es-CO"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };
  
  export default formatCurrency;
