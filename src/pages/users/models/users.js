import {fetch} from '../services/users';

export default {
  namespace: 'testUsers',
  state: {},
  effects: {
    * fetch({payload:{page=1}}, {call, put}) {
      const {data, headers} = yield call(fetch, {page});
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        }
      })
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/users') {
          dispatch({type: 'fetch', payload: query})
        }
      })
    }
  }
}
