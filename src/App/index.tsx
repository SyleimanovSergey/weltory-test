import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import VersionSelectCardsPage from 'pages/VersionSelectPage';

const Index: React.FC = () => {
	return (
		<>
			<Header />
			<VersionSelectCardsPage />
			<Footer />
		</>
	);
};

export default Index;
