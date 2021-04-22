/* eslint-disable camelcase */

// Interfaces
import { IAttribute } from './attribute';
import IShipping from './shipping';
import { ISeller, ISellerAddress } from './seller';
import { IDifferentialPricing, IPrices } from './prices';
import { IInstallments } from './installments';
import { IAddress } from './address';

// Enums
import { CURRENCY_TYPES } from './installments/enums';
import {
  SITE_TYPES,
  BUYING_MODE_TYPES,
  CATEGORY_TYPES,
  CONDITION_TYPES,
  DOMAIN_TYPES,
  LISTING_TYPES,
  RESULT_TAG_TYPES,
} from '../emuns';

interface IProductDetail {
  id: string;
  site_id: SITE_TYPES;
  title: string;
  seller: ISeller;
  price: number;
  prices: IPrices;
  sale_price: null;
  currency_id: CURRENCY_TYPES;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: BUYING_MODE_TYPES;
  listing_type_id: LISTING_TYPES;
  stop_time: Date;
  condition: CONDITION_TYPES;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: IInstallments;
  address: IAddress;
  shipping: IShipping;
  seller_address: ISellerAddress;
  attributes: IAttribute[];
  original_price: null;
  category_id: CATEGORY_TYPES;
  official_store_id: null;
  domain_id: DOMAIN_TYPES;
  catalog_product_id: null;
  tags: RESULT_TAG_TYPES[];
  order_backend: number;
  use_thumbnail_id: boolean;
  differential_pricing?: IDifferentialPricing;
}

export default IProductDetail;
