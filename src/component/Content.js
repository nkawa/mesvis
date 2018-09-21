import React, { Component } from 'react';
import TimeLine from './TimeLine';
import FilterForm from './FilterForm';
import SortButton from './SortButton';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = { logs: this.props.logs }
    }

    componentDidMount() {
        // this.interval = setInterval(() => this.addDemo(), 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.interval)
    }

    componentWillReceiveProps(nextProps) {
        // console.log("Content:willUpdate");
        this.setState(nextProps);
    }

    handleFilter(val) {
        const result = this.props.logs.filter((log) => {
            return (
                log.msgType.toLowerCase().indexOf(val) >= 0 ||
                log.src.toString().indexOf(val) >= 0 ||
                log.arg.toLowerCase().indexOf(val) >= 0
            );
        });
        this.setState({
            logs: result
        });
    }

    handleSortByAsc(key) {
        const result = this.state.logs.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({
            logs: result
        });
    }

    handleSortByDesc(key) {
        const result = this.state.logs.sort((a, b) => {
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            } else {
                return 0;
            }
        });
        this.setState({
            logs: result
        });
    }

    render() {
        const messages = this.state.logs.map((log, index) => {
            return <TimeLine log={log} key={index} />
        });

        return (
            <section className="content">

                <div className="row">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <FilterForm onFilterVal={this.handleFilter.bind(this)} />
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <SortButton
                            onSortByAsc={this.handleSortByAsc.bind(this)}
                            onSortByDesc={this.handleSortByDesc.bind(this)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ul className="timeline">
                            <li className="time-label">
                                {/* <span className="bg-gray">
                                    Synergic Market Server
                                </span> */}
                            </li>
                            {messages}
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}