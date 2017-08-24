import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { initialize, reduxForm, getFormValues } from 'redux-form/immutable'

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.getIn(['pageCreate', 'type']),
        formValues: getFormValues('create')(state),
        tableList: state.getIn(['pageIndex', 'tableData'])
      }
}
const mapDispatchToProps = (dispatch) => ({
    initializeForm: (value) => {
      dispatch(initialize('create', value));
    },
});

export default function decorateEntry(EntryComponent) {
    const form =  connect(mapStateToProps, mapDispatchToProps)(withRouter(EntryComponent));
    return reduxForm({
        form: 'create',
        enableReinitialize: true
    })(form)
}