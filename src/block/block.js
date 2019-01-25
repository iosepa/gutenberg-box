/**
 * BLOCK: info-box
 *
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import attributes from './attributes.js';
import Inspector from './inspector.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, BlockControls } = wp.editor;
const {
	Tooltip,
} = wp.components;
/**
 * Register: aa Gutenberg Block.
 */

registerBlockType(
	'iob/block-info-box', {

		title: __('info-box'),
		icon: {
			background: '#4a81c8',
			foreground: '#e5e5e5',
			src: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		},
		category: 'common',
		keywords: [
			__('info-box'),
			__('iosepa.io'),
		],

		attributes,

		edit: props => {
			const {
				setAttributes,
				attributes: {
					addLink,
					link,
					bodyText,
				},
			} = props;

			return (
				<div className="infoBox" >
					<Inspector {...{ setAttributes, ...props }} />
					{addLink &&
						<a className="linkRef" href={link}></a>}
					<RichText
						tagName="h5"
						value={headingText}
						onChange={headingText => setAttributes({ headingText })}
						placeholder="enter heading here"
					/>
					<RichText
						tagName="h6"
						placeholder="enter prices here"
						value={price}
						onChange={price => setAttributes({ price })}
					/>
					<RichText
						tagName="p"
						placeholder="enter description here"
						value={bodyText}
						onChange={bodyText => setAttributes({ bodyText })}
					/>
				</div>
			);
		},


		save: props => {
			const {
				attributes: {
					addLink,
					link,
					bodyText,
				},
			} = props;

			return (
				<div className="infoBox" >
					{addLink &&
						<a href={link}></a>}
					<RichText.Content
						tagName='h5'
						value={headingText}
					/>
					<RichText.Content
						tagName='h6'
						value={price}
					/>
					<RichText.Content
						tagName='p'
						value={bodyText}
					/>

				</div >
			);
		},
	});


