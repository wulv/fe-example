import React, { PureComponent } from 'react'
import { Actions } from 'zan-shuai'
import { Field, FormSection } from 'redux-form/immutable'

import decorateEntry from './decorateEntry';

const renderField = ({input, className, label, type, meta: {touched, error}}) => (
  <div className={className}>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export class AddForm extends PureComponent {
    onSubmit = (e) => {
        const val = this.props.formValues;
        Actions.add(val)
        .then(() => {
            const { history } = this.props;
            history.push('/');
        })
    }
  render () {
    const {handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name='name'
          type='text'
          component={renderField}
          label='姓名' />
        <Field
          name='age'
          type='number'
          component={renderField}
          label='年龄' />
        <Field
          name='height'
          type='number'
          component={renderField}
          label='身高' />
        <Field
          name='width'
          type='number'
          component={renderField}
          label='体重' />
        <FormSection name='hobby'>
          <FormSection name='movie'>
            <label>爱好</label>
            <div>
                <Field
                className="hobby"
                name='name'
                type='text'
                component={renderField}
                label='电影名' />
                <Field
                className="hobby"
                name='director'
                type='text'
                component={renderField}
                label='导演' />
            </div>
          </FormSection>
        </FormSection>
        <div>
          <button onClick={this.onSubmit} type='button' disabled={submitting}>
            提交
          </button>
          <button type='button' disabled={pristine || submitting} onClick={reset}>
            清除
          </button>
        </div>
      </form>
    )
  }
}


export default decorateEntry(AddForm)
