/* eslint-disable camelcase */
// Enums
import { SITE_TYPES } from './emuns';

// Interfaces
import { IAvailableFilter, IFilter, IPaging, ISort } from './paging';
import IProductDetail from './product-detail';

export interface IProductListApiResponse {
  site_id: SITE_TYPES;
  query: string;
  paging: IPaging;
  results: IProductDetail[];
  secondary_results: any[];
  related_results: any[];
  sort: ISort;
  available_sorts: ISort[];
  filters: IFilter[];
  available_filters: IAvailableFilter[];
}
