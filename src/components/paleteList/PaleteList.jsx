import React from 'react';
import PaleteItem from '../paleteItem/PaleteItem';
import './paletelist.css'

const PaleteList = ({palete}) => {
	return (
		<div className='page'>
			<div className='color__container'>
				{
					palete.map(palete => <PaleteItem palete={palete} key={palete.id}/>)
				}	
			</div>
		</div>
		
	);
};

export default PaleteList;