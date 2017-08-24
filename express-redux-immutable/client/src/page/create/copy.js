import { Actions } from 'zan-shuai'

import { EditForm } from './edit';
import decorateEntry from './decorateEntry';

export class CopyForm extends EditForm {
    onSubmit = () => {
        const val = this.props.formValues;
        Actions.add(val)
        .then(() => {
            const { history } = this.props;
            history.push('/');
        })
    }
    componentWillMount() {
        this.getInitData()
        .then(resp => {
             this.props.initializeForm(resp.update('name', name => `${name}-copy`))
         })
     }
}

export default decorateEntry(CopyForm)