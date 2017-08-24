import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class Tr extends PureComponent {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.onDelete === this.props.onDelete)
        console.log(nextProps.data === this.props.data)
        if(nextProps === this.props) {
            console.log(11)
        }
    }

    render() {
        let { data, onDelete } = this.props;
        data = data.toJS();
        return (<div className="tr">
            <div className="cell">
                <div className="cell__child-container">
                    <div>{data.name}</div>
                </div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{data.age}</div>
            </div>
            <div className="cell cell--money cell--center">
                <div className="cell__child-container">{data.height}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{data.width}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">
                    <Link to={`update/${data.name}`}><span>修改</span></Link>&nbsp;| &nbsp;
                    <Link to={`copy/${data.name}`}><span>复制</span></Link>&nbsp;| &nbsp;
                    <span onClick={() => onDelete(data.name)}>删除</span>
                </div>
            </div>
        </div>);
    }
}