import { createEffect, Actions } from 'zan-shuai';

import { getTableData, getDetail, deleteById, add, update } from '../api';

createEffect('getTableData', (payload) => {
    return getTableData(payload)
    .then(({ data }) => {
        if (data.code === 0) {
            Actions.pageIndexState.setTableData(data.data)
        }
        })
    .catch(console.log)
});


createEffect('add', (payload) => {
    return add(payload)
    .then(() => Actions.pageIndexState.add(payload))
    .catch(console.log)
});

createEffect('update', (payload) => {
    return update(payload)
    .then(() => Actions.pageIndexState.update(payload))
    .catch(console.log)
});

createEffect('deleteById', (payload) => {
    return deleteById(payload)
    .then(() => Actions.pageIndexState.delete(payload))
    .catch(console.log)
});

createEffect('getDetail', (payload) => {
    return getDetail(payload)
    .then(({ data }) => {
        if (data.code === 0) {
            return data.data;
            // Actions.pageCreateState.setFormValue(data.data)
        }
    })
    .catch(console.log)
});
