import { createState } from 'zan-shuai';
import { fromJS } from 'immutable';

const initialValue = fromJS({
    loaded: false,
    loading: false,
    tableData: [],
    totle: 0
});

export default createState('pageIndexState', {
    initial: initialValue,
    setTableData(state, payload) {
        const tableData = fromJS(payload);
        return state.set('tableData', tableData);
    },
    delete(state, payload) {
        return  state.update('tableData', list => list.filter(
            (i) => i.get('name') !== payload
        ));
    },
    showLoading(state, payload) {
        return state.update('loading', i => !i)
    },
    add(state, payload) {
        return state.update('tableData', list => list.push(payload));
    },
    update(state, payload) {
        return state.update('tableData', list => list.update(
            list.findIndex((item) => item.get('name') === payload.get('name')), 
        item => item.merge(payload)))
    },
    updateWidth(state, payload) {
        return state.update('tableData', list => list.update(
            list.findIndex((item) => item.get('name') === payload.name), 
        item => item.set('width', payload.width)));
    }
})