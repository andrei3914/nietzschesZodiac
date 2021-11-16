import React from 'react';
import './Carduri.css';

const Carduri = ( {afisCitat} ) => {
	return (
		<div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 berbec'>	
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 taur'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 gemeni'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 rac'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 leu'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 fecioara'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 balanta'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 scorpion'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 sagetator'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 capricorn'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 varsator'>
			</div>
			<div onClick={afisCitat} className='dimensiuni tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 pesti'>
			</div>
			<div className="tc br3 pa3 ma2 " id="afisare">
			</div>
		</div>
	);
}

export default Carduri;