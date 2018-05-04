import React from 'react';

export default class HouseSelect extends React.Component {

  render() {
    let tempView = {}
	if (this.props.housesList.length === 0) {
		tempView = <option>Ei taloyhtiöitä</option>
	} else {
		tempView = this.props.housesList.map((list) => 
		<option value={list.id} key={list.id}>{list.address}</option>
		)
	}

    return (
        <div className="form-group">
			<label htmlFor="talo">Talo</label>
            <select className="form-control" id="talo" value={this.props.hid}>
					{tempView}
			</select>
        </div>	
		);
	}
}

