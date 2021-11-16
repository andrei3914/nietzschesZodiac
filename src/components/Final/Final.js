import React from 'react';
import './Final.css';

const Final = ( {cireasaDePeTort} ) => {
	return (
		<div>
			<div>
				<a onClick={cireasaDePeTort} class="f3 butonul" href="#0">Vreau mai mult!</a>
			</div>
			<div className="tc br3 pa3 ma2">
				<p id="cireasa"> </p>
			</div>
		</div>
	);
}

export default Final;