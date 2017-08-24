import { fromJS } from 'immutable';
import { Actions } from 'zan-shuai'
import { AddForm } from './add';
import decorateEntry from './decorateEntry';

export class EditForm extends AddForm {
    onSubmit = () => {
        const val = this.props.formValues;
        Actions.update(val)
        .then(() => {
            const { history } = this.props;
            history.push('/');
        })
    }
    getInitData() {
        const { match, tableList  } = this.props;
        const name = match && match.params.name;
        const index = tableList.findIndex((item) => item.get('name') === name);
        if (index > -1) {
            return new Promise(
                function(resolve, reject) {
                    resolve(tableList.get(index))
                }
            );
        } else {
            return Actions.getDetail(name)
            .then((resp) => fromJS(resp));
        }
    }
    componentWillMount() {
       this.getInitData()
       .then(resp => {
            this.props.initializeForm(resp)
        })
    }
}


export default decorateEntry(EditForm)