import React, { PureComponent } from 'react';
import Tr from './Tr';

export default class Table extends PureComponent {
    render() {
        const tableData = this.props.data;
        return (
            <div className="zent-table ">
                <div className="thead">
                    <div className="stickrow tr">
                        <div className="cell">
                            <div className="cell__child-container">商品</div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>访问量</a>
                            </div>
                        </div>
                        <div
                            className="cell cell--money cell--center"
                            >
                            <div className="cell__child-container">
                                <a>库存<span className="desc"></span>
                                </a>
                            </div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>总销量</a>
                            </div>
                        </div>
                        <div className="cell" >
                            <div className="cell__child-container">
                                <a>操作</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tbody">
                    {tableData.map(i => <Tr onChange={this.props.onChange} key={i.get('item_id')} data={i} />)}
                </div>
            </div>
        );
    }
}