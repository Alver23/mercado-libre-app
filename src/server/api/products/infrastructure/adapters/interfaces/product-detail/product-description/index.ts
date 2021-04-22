/* eslint-disable camelcase */

export interface ISnapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface IProductDetailDescriptionAPIResponse {
  text: string;
  plain_text: string;
  last_updated: Date;
  date_created: Date;
  snapshot: ISnapshot;
}
