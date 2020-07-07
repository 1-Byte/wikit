import React from 'react';
import './Color.css';

/**
 * Inspired by { ColorItem } from '@storybook/addon-docs/blocks';
 * Unfortunately its swatch is not usable independently
 */
export default function ( { token } ) {
	return (
		<div className='color' style={{ backgroundColor: token.value }} />
	);
}

