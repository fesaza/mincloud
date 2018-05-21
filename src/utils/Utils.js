import upperFirst from 'lodash/upperFirst';
import { navItems } from './MenuItems';

export function toTitle(str) {
  return navItems.filter(menu => menu.to.includes(str))[0].label;
}

export function toTitleUrl(str) {
  return str.split(/-|[A-Z]+/).reduce((s, split) => {
    const capititalized = split.match(/svg$/) ? 'SVG' : upperFirst(split);
    return `${s ? `${s} ` : ''}${capititalized}`;
  }, '');
}
