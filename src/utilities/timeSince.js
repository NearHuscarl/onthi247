// No need for moment.js because real programmers code from scratch
// Just kidding, I copied from this
// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function timeSince(date) {
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + ' năm';
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + ' tháng';
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + ' ngày';
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + ' giờ';
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + ' phút';
	}
	return Math.floor(seconds) + ' giây';
}

export default timeSince;
