/* eslint-disable camelcase */

// Interfaces
import { IShipping } from './shipping';
import { ISellerAddress } from './seller';

// Enums
import { ATTRIBUTE_GROUP_TYPES, ATTRIBUTE_GROUP_NAME_TYPES } from '../enums';

export interface IStruct {
  number: number;
  unit: string;
}

export interface IValue {
  id: null | string;
  name: string;
  struct: IStruct | null;
}

export interface IAttribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  value_struct: IStruct | null;
  values: IValue[];
  attribute_group_id?: ATTRIBUTE_GROUP_TYPES;
  attribute_group_name?: ATTRIBUTE_GROUP_NAME_TYPES;
}

export interface IDescription {
  id: string;
}

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface ILocation {}

export interface IPicture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface IAttributeCombination {
  id: string;
  name: string;
  value_id: null;
  value_name: string;
  value_struct: null;
  values: IValue[];
}

export interface IVariation {
  id: number;
  price: number;
  attribute_combinations: IAttributeCombination[];
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  picture_ids: string[];
  catalog_product_id: null;
}

export interface IProductDetailApiResponse {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: null;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: IAttribute[];
  buying_mode: string;
  listing_type_id: string;
  start_time: Date;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: IPicture[];
  video_id: string;
  descriptions: IDescription[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: IShipping;
  international_delivery_mode: string;
  seller_address: ISellerAddress;
  seller_contact: null;
  location: ILocation;
  coverage_areas: any[];
  attributes: IAttribute[];
  warnings: any[];
  listing_source: string;
  variations: IVariation[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: null;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: number;
  catalog_listing: boolean;
  channels: string[];
}
