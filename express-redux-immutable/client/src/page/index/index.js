import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'zan-shuai';
import { Link } from 'react-router-dom'

import Table from '../../components/Table';

class Index extends PureComponent {
  dalete = (name) => {
    Actions.deleteById(name);
  }
  componentWillMount() {
    const { data } = this.props;
    if (data.get('tableData').size === 0) {
        Actions.getTableData();
    }
  }
  showLoading() {
    Actions.pageIndexState.showLoading();
  }
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <Table onDelete={this.dalete} data={data.get('tableData')} />
        <Link to="/add"><button>add</button></Link>
        <button onClick={this.showLoading}>{data.get('loading') ? '是' : '否'}</button>
      </div>
    );
  }
}

export default connect(state => {
    return {
      data: state.get('pageIndex')
    };
  })(Index);
