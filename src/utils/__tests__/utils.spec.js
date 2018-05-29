
import { mapDataSource } from '../Utils';
import { URL_DATA } from '../../config';

describe('utils', () => {
  it('should create dataSourceModel object', () => {
    const ds = {
      path: 'Mincloud_Lappiz_Personass',
      pageSize: 30,
    };
    const expectedDataSource = {
      path: 'Mincloud_Lappiz_Personass',
      pageSize: '$top=30',
      expand: '',
      filter: '',
      select: '',
      opts: ['$top=30', '', '', ''],
    };
    expect(mapDataSource(ds)).toEqual(expectedDataSource);
  });

  it('should return a valid url', () => {
    const dataSource = {
      path: 'Mincloud_Lappiz_Personass',
      pageSize: 30,
      expand: 'Mincloud_Lappiz_Seguimientos',
      filter: "Nombre eq 'Felipe'",
      select: 'Id,Nombre',
      opts: ['', '', ''],
    };
    const expectedUrl = `${URL_DATA}/${dataSource.path}?$format=json&$inlinecount=allpages&$top=${dataSource.pageSize}&$filter=${dataSource.filter}&$expand=${dataSource.expand}&$select=${dataSource.select}`;
    expect(mapDataSource(dataSource).getUrl()).toEqual(expectedUrl);
  });
});
