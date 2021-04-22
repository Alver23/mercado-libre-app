/* eslint-disable camelcase */
// Enums
import { PRICE_TYPES, EXCHANGE_RATE_CONTEXT_TYPES } from './enums';
import { CURRENCY_TYPES } from '../installments/enums';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface IMetadata {}

export interface IDifferentialPricing {
  id: number;
}

export interface IConditions {
  context_restrictions: any[];
  start_time: null;
  end_time: null;
  eligible: boolean;
}

export interface IPrice {
  id: string;
  type: PRICE_TYPES;
  conditions: IConditions;
  amount: number;
  regular_amount: null;
  currency_id: CURRENCY_TYPES;
  exchange_rate_context: EXCHANGE_RATE_CONTEXT_TYPES;
  metadata: IMetadata;
  last_updated: Date | null;
}

export interface IPresentation {
  display_currency: CURRENCY_TYPES;
}

export interface IPrices {
  id: string;
  prices: IPrice[];
  presentation: IPresentation;
  payment_method_prices: any[];
  reference_prices?: any[];
  purchase_discounts?: any[];
}
