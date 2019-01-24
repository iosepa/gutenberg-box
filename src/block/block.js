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

		edit(props) {
			const {
				setAttributes,
				attributes: {
					addLink,
					link,
					cardTitle,
					cardText,
					cardTextAlignment,
					cardHeadingSize,
					imgID,
					imgURL,
					cardBtnPresent,
					useColor,
					colorFontControl,
					colorBackgroundControl,
				},
			} = props;

			return (
				<div className="infoBox">
					<Inspector {...{ setAttributes, ...props }} />
					<RichText
						tagName="h5"
						value={attributes.headingText}
						onChange={(changes) => { setAttributes({ headingText: changes }) }}
						placeholder="enter heading here"
					/>
					<RichText
						tagName="h6"
						value={attributes.price}
						onChange={(changes) => { setAttributes({ price: changes }) }}
						placeholder="enter prices here"
					/>
					<RichText
						tagName="p"
						value={attributes.bodyText}
						onChange={(changes) => { setAttributes({ bodyText: changes }) }}
						placeholder="enter description here"
					/>
				</div>
			);
		},


		save(props) {
			const { attributes } = props;

			return (
				<div className="infoBox">
					{attributes.addLink &&
						<a href={attributes.link}></a>}
					<h5>{attributes.headingText}</h5>
					<h6>{attributes.price}</h6>
					<p>{attributes.bodyText}</p>

				</div>
			);
		},
	});


/*
			<div className="infoBox">
				{attributes.link === "<br>" || attributes.link === "" ?
					<span><h5>{attributes.headingText}</h5>
						<h6>{attributes.price}</h6>
						<p>{attributes.bodyText}</p></span>

					: <span><a href='" + attributes.link + "' >
						<h5>{attributes.headingText}</h5>
						<h6>{attributes.price}</h6>
						<p>{attributes.bodyText}</p>
					</a></span>}
			</div>
			*/