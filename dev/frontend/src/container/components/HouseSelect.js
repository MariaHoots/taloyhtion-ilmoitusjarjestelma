import React from 'react';

export default class HouseSelect extends React.Component {

  render() {
		let tempView = <select className="form-control" id="talo">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>;

    return (
        <div className="form-group">
			<label htmlFor="talo">Talo</label>
				{tempView}
        </div>	
		);
	}
}

