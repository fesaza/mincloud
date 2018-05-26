import upperFirst from 'lodash/upperFirst';
import { navItems } from './MenuItems';
import DataSourceModel from '../models/DataSourceModel';

const mapDataSource = dataSource => (
  new DataSourceModel(
    dataSource.path,
    dataSource.pageSize,
    dataSource.filter,
    dataSource.expand,
    dataSource.select,
  )
);

export function toTitle(str) {
  return navItems.filter(menu => menu.to.includes(str))[0].label;
}

export function toTitleUrl(str) {
  return str.split(/-|[A-Z]+/).reduce((s, split) => {
    const capititalized = split.match(/svg$/) ? 'SVG' : upperFirst(split);
    return `${s ? `${s} ` : ''}${capititalized}`;
  }, '');
}

export { mapDataSource };
