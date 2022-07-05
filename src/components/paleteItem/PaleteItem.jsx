import React from 'react';
import './paleteItem.css'

const PaleteItem = (props) => {


	return (
		<div className="item">		
			<div className="palete">
				<div className="place c3" style={{backgroundColor: props.palete.c0}}><span className="copy">{props.palete.c0}</span></div>
				<div className="place c2" style={{backgroundColor: props.palete.c1}}><span className="copy">{props.palete.c1}</span></div>
				<div className="place c1" style={{backgroundColor: props.palete.c2}}><span className="copy">{props.palete.c2}</span></div>
				<div className="place c0" style={{backgroundColor: props.palete.c3}}><span className="copy">{props.palete.c3}</span></div>
			</div>
		</div>
	);
};

export default PaleteItem;