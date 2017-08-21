import React, { Component } from 'react';

export default class Tr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    handleBlur = (e) => {
        const value= e.target.value;
        this.setState({ edit: false });
        const { onChange, data: { item_id } } = this.props;
        onChange && onChange(item_id, value);
    }
 
    handleClick = () => {
        this.setState({ edit: true });
    }

    render() {
        const data = this.props.data;
        const { edit, value } = this.state;

        return (<div className="tr">
            <div className="cell">
                <div className="cell__child-container">
                    <div>{data.item_id}</div>
                </div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{data.bro_uvpv}</div>
            </div>
            <div className="cell cell--money cell--center">
                <div className="cell__child-container">{data.stock_num}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{edit ? <input onBlur={this.handleBlur}  defaultValue={data.sold_num} /> : data.sold_num}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">
                    <span onClick={this.handleClick}>修改</span>
                </div>
            </div>
        </div>);
    }
}