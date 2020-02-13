import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    render() {
        return (
            <div>
                {this.props.bands.map(b => <Band key={b.id} {...b} deleteBand={this.props.deleteBand}/>)}
            </div>
        )
    }
}

export default Bands;