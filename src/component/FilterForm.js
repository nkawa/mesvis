import React, { Component } from 'react';

export default class FilterForm extends Component {
    filterVal() {
        const val = this.refs.myInput.value;
        this.props.onFilterVal(val);
    }
    render() {
        return (
            <div class="info-box">
                <span class="info-box-icon bg-aqua"><i class="fa fa-search"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">キーワードで絞り込む</span>
                    <input
                        type="text"
                        ref="myInput"
                        defaultValue=""
                        onKeyUp={this.filterVal.bind(this)}
                    />
                </div>
            </div>
        );
    }
}