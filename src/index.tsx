import React from 'react';
import ReactDOM from 'react-dom';
import Index from './App';

import './assets/styles/_reset.scss';
import './assets/styles/_variables.scss';
import './assets/styles/_fonts.scss';
import './assets/styles/_main.scss';

ReactDOM.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>,
	document.getElementById('root')
);
