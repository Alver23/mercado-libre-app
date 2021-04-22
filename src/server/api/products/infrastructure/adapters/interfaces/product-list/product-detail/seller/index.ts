/* eslint-disable camelcase */
// Enums
import {
  TRANSACTIONS_PERIOD_TYPES,
  SELLER_TAG,
  CITY_TYPES,
  POWER_SELLER_STATUS_TYPES,
  CANCELLATIONS_PERIOD,
  LEVEL_TYPES,
} from './enums';
import { SITE_TYPES } from '../../emuns';

// Interfaces
import { ISort } from '../../paging';

export interface ICity {
  id: CITY_TYPES | null;
}

export interface IExcluded {
  real_rate: number;
  real_value: number;
}

export interface ICancellations {
  rate: number;
  value: number;
  period: CANCELLATIONS_PERIOD;
  excluded?: IExcluded;
}

export interface ISales {
  period: CANCELLATIONS_PERIOD;
  completed: number;
}

export interface IRatings {
  negative: number;
  positive: number;
  neutral: number;
}

export interface ISellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: ISort;
  state: ISort;
  city: ISort;
  latitude: string;
  longitude: string;
}

export interface IMetrics {
  claims: ICancellations;
  delayed_handling_time: ICancellations;
  sales: ISales;
  cancellations: ICancellations;
}

export interface ITransactions {
  total: number;
  canceled: number;
  period: TRANSACTIONS_PERIOD_TYPES;
  ratings: IRatings;
  completed: number;
}

export interface IEshopLocation {
  state: ICity;
  neighborhood: ICity;
  country: ICity;
  city: ICity;
}

export interface IEshopRubro {
  id: string;
  name: string;
  category_id: string;
}

export interface ISellerReputation {
  transactions: ITransactions;
  power_seller_status: POWER_SELLER_STATUS_TYPES | null;
  metrics: IMetrics;
  level_id: LEVEL_TYPES | null;
  protection_end_date?: Date;
  real_level?: string;
}

export interface IEshop {
  nick_name: string;
  eshop_rubro: IEshopRubro | null;
  eshop_id: number;
  eshop_locations: IEshopLocation[];
  site_id: SITE_TYPES;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

export interface ISeller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: SELLER_TAG[];
  eshop?: IEshop;
  seller_reputation: ISellerReputation;
}
