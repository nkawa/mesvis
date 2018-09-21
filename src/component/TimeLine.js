import React, { Component } from 'react';

export default class TimeLine extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { log } = this.props;
        return (
            <li>
                <div className="timeline-item">
                    <span class="time"><i class="fa fa-clock-o"></i> {log.time}</span>
                    <h3 class="timeline-header">{log.msgType}: {log.src}</h3>
                    <div class="timeline-body">
                        chType: {log.chType}
                    </div>
                    <div class="timeline-body">
                        dst: {log.dst}
                    </div>
                    <div class="timeline-body">
                        arg: {log.arg}
                    </div>
                </div>
            </li>
        )
    }
}