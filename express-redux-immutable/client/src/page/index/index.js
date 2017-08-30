import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'zan-shuai';
import { Link } from 'react-router-dom'

import Table from '../../components/Table';

class Footer extends PureComponent {
  render() {
    const { showLoading, loading } = this.props;
    return (
      <div>
        <Link to="/add"><button>add</button></Link>
        <button onClick={showLoading}>{loading ? '是' : '否'}</button>
      </div>
    );
  } 
}
class Index extends PureComponent {
  componentWillMount() {
    const { data } = this.props;
    if (data.get('tableData').size === 0) {
        Actions.getTableData();
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <Table
          onDelete={Actions.deleteById}
          onWidthChange={Actions.pageIndexState.updateWidth}
          data={data.get('tableData')} />
        <Footer showLoading={Actions.pageIndexState.showLoading}  loading={data.get('loading') } />
      </div>
    );
  }
}

export default connect(state => {
    return {
      data: state.get('pageIndex')
    };
  })(Index);
