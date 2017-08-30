import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Option extends PureComponent {
    render() {
        const { name, onDelete }= this.props;
        return (
            <div className="cell" >
            <div className="cell__child-container">
                <Link to={`update/${name}`}><span>修改</span></Link>&nbsp;| &nbsp;
                <Link to={`copy/${name}`}><span>复制</span></Link>&nbsp;| &nbsp;
                <span onClick={() => onDelete(name)}>删除</span>
            </div>
        </div>
        )
    }
}
export default class Tr extends PureComponent {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.onDelete === this.props.onDelete)
        console.log(nextProps.data === this.props.data)
        if(nextProps === this.props) {
            console.log(11)
        }
    }

    handleChange = (e) => {
        const { data, onWidthChange } = this.props;
        onWidthChange && onWidthChange({
            name: data.get('name'),
            width: e.target.value
        })

    }
    render() {
        const { data, onDelete } = this.props;
        return (<div className="tr">
            <div className="cell">
                <div className="cell__child-container">
                    <div>{data.get('name')}</div>
                </div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{data.get('age')}</div>
            </div>
            <div className="cell cell--money cell--center">
                <div className="cell__child-container">{data.get('height')}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container"><input type="number" onChange={this.handleChange} value={data.get('width')} /></div>
            </div>
            <Option onDelete={onDelete} name={data.get('name')}  />
        </div>);
    }
}