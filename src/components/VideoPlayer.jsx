import React from 'react';
import PropTypes from 'prop-types';
import styled from '../styles';
import VideoPlayImage from '../../public/images/video-play-icon.jpg';

const Video = styled.div`
	position: relative;

	[alt='play'] {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 30%;
	}

	[alt='thumbnail'] {
		width: 100%;
		object-fit: cover;
	}
`;

export default function VideoPlayer({ className, thumbnail }) {
	return (
		<Video className={className}>
			<img src={thumbnail} alt='thumbnail' />
			<img src={VideoPlayImage} alt='play' />
		</Video>
	);
}

VideoPlayer.propTypes = {
	className: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
};