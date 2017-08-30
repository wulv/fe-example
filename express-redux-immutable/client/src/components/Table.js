import React, { PureComponent } from 'react'
import Tr from './Tr'

const Th = () => {
  return (<div className='thead'>
            <div className='stickrow tr'>
              <div className='cell'>
                <div className='cell__child-container'>
                  姓名
                </div>
              </div>
              <div className='cell'>
                <div className='cell__child-container'>
                  <a>年龄</a>
                </div>
              </div>
              <div className='cell cell--money cell--center'>
                <div className='cell__child-container'>
                  <a>身高<span className='desc'></span></a>
                </div>
              </div>
              <div className='cell'>
                <div className='cell__child-container'>
                  <a>体重</a>
                </div>
              </div>
              <div className='cell'>
                <div className='cell__child-container'>
                  <a>操作</a>
                </div>
              </div>
            </div>
          </div>);
}

export default class Table extends PureComponent {
  render () {
    const tableData = this.props.data
    return (
      <div className='zent-table '>
        {Th()}
        <div className='tbody'>
          {tableData.map(i => <Tr onWidthChange={this.props.onWidthChange} onDelete={this.props.onDelete} key={i.get('name')} data={i} />
           )}
        </div>
      </div>
    )
  }
}
