
import * as settings from '../config';

/**
 * This class must be the only way to acces odata api, is the only class authorized to build urls
 * to consume Odata api
 */
export default class DataSourceModel {
  filter;
  pageSize;
  entity;
  expand;
  select;
  opts;

  constructor(entity: string, pageSize: number, filter: string, expand, select) {
    this.entity = entity;
    this.pageSize = pageSize || 20;
    this.filter = filter ? `$filter=${filter}` : '';
    this.expand = expand;
    this.select = select;
    this.opts = [];
    this.opts.push(this.filter);
    this.opts.push(this.expand);
    this.opts.push(this.select);
  }

  getUrl(): string {
    const baseUrl = settings.URL_DATA;
    const { entity, opts, pageSize } = this;
    return `${baseUrl}/${entity}?$format=json&$top=${pageSize}&$inlinecount=allpages&${opts.filter(op => op).join('&')}`;
  }
}
