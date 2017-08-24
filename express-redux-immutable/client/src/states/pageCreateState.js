import { createState } from 'zan-shuai';
import { fromJS } from 'immutable';

const initialValue = fromJS({
    type: 'add',
    formValue: {
        name: '11',
        age: 33,
        height: '',
        width: '',
        hobby: {
            movie: {
                name: '',
                director: ''
            }
        }
    }
});

export default createState('pageCreateState', {
    initial: initialValue,
    setType(state, payload) {
        return state.set('type', payload);
    },
    setFormValue(state, val) {
        return state.update('formValue', value => value.merge(fromJS(val)))
    }
})