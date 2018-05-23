
import * as settings from '../config';

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
