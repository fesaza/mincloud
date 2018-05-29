import * as dataItemsActions from '../DataItemsActions';
import { mapDataSource} from '../../utils/Utils';

describe('dataitems actions', () => {
  const dataSource = {
    path: 'Mincloud_Lappiz_Personass',
    pageSize: 30,
  };
  it('should create an action to request a collection of dataitems', () => {
    const expectedRequestFeature = {
      type: dataItemsActions.REQUEST_MEMBERS,
      dataSource: mapDataSource(dataSource),
    };
    expect(dataItemsActions.requestMembers(dataSource)).toEqual(expectedRequestFeature);
  });

  it('should create an action to receive a array of dataitems', () => {
    const items = [];
    const expectedRequestFeature = {
      type: dataItemsActions.RECEIVE_MEMBERS,
      items,
    };
    expect(dataItemsActions.receiveMembers(items)).toEqual(expectedRequestFeature);
  });

  it('should create an action to request a filtered dataItem collection', () => {
    const expectedRequestFeature = {
      type: dataItemsActions.FILTER_MEMBERS,
      dataSource: mapDataSource(dataSource),
    };
    expect(dataItemsActions.filterItems(dataSource)).toEqual(expectedRequestFeature);
  });
});
