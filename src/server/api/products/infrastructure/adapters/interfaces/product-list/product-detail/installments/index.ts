/* eslint-disable camelcase */

// Enums
import { CURRENCY_TYPES } from './enums';

export interface IInstallments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CURRENCY_TYPES;
}
