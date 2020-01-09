import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function ScrollToTopOnMount() {
	const history = useHistory();
	useEffect(() => {
		if (history.action === 'PUSH') {
			window.scrollTo(0, 0);
		}
	}, []);

	return null;
}

export default function ScrollToTop() {
	const history = useHistory();

	if (history.action === 'PUSH') {
		window.scrollTo(0, 0);
	}

	return null;
}
