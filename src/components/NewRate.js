import React from 'react';

import {AddRateForm} from '../containers/AddRateForm';
import {AddRateButton} from './AddRateButton';


export class NewRate extends React.Component {
    state = {
        isEditModeOn: false
    }

    onAddRateButtonClick = () => this.setState({isEditModeOn: true});

    onBodyClick = () => {
        if (!this.state.isEditModeOn) {
            this.onAddRateButtonClick();
        }
    }

    onAddComplete = () => this.setState({isEditModeOn: false});

    render() {
        return (
            <div className="rate new">
                <div className="body" onClick={this.onBodyClick}>
                    {this.state.isEditModeOn ?
                        <AddRateForm onRateAdd={this.onAddComplete}/> :
                        <AddRateButton onClick={this.onAddRateButtonClick} />}
                </div>
            </div>
        )
    }
}
