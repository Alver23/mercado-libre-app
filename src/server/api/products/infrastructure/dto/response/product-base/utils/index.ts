import IProductPrice from '@alversoft/server/api/products/domain/entities/product-price';
import IProductDetail from '@alversoft/server/api/products/infrastructure/adapters/interfaces/product-list/product-detail';

const getPrice = (data: IProductDetail): IProductPrice => {
  const hasPrices = (data as IProductDetail)?.prices;
  if (hasPrices) {
    const { prices = [] } = hasPrices;
    const [price] = prices;
    if (price) {
      const { amount, currency_id: currency } = price;
      return { amount, currency, decimals: 2 };
    }
  }
  return { amount: data.price, currency: data.currency_id, decimals: 2 };
};

export default getPrice;
