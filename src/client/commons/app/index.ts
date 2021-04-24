const numberFormat = (value: number, currency: string): string =>
  new Intl.NumberFormat('es-AR', {
    currency,
    style: 'currency',
  }).format(value);

export default numberFormat;
