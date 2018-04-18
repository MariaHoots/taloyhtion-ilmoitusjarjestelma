import React from 'react';

export default class FlatSelect extends React.Component {

    render() {
	    let tempView = <select className="form-control" id="asunto">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>;

    return (
        
        <div className="form-group">
			<label htmlFor="asunto">Asunto</label>
                {tempView}
        </div>
	);
    }
}

