/**
 * BLOCK: info-box
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */




registerBlockType('cgb/block-info-box', {

	title: __('info-box'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('info-box'),
		__('box-link'),
	],

	attributes: {
		link: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		headingText: {
			type: 'array',
			source: 'children',
			selector: 'h5',
		},
		price: {
			type: 'array',
			source: 'children',
			selector: 'h6',
		},
		bodyText: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},


	},

	edit(props) {

		const { setAttributes, attributes } = props;

		function onLinkChange(changes) {
			setAttributes({
				link: changes
			});
		}
		function onPriceChange(changes) {
			setAttributes({
				price: changes
			});
		}
		function onTextChange(changes) {
			setAttributes({
				headingText: changes
			});
		}
		function onPChange(changes) {
			setAttributes({
				bodyText: changes
			});
		}
		return (
			<div className='infoBox'>
				<RichText
					tagName='h3'
					value={attributes.link}
					onChange={onLinkChange}
					placeholder='enter link here'
				/>
				<RichText
					tagName='h5'
					value={attributes.headingText}
					onChange={onTextChange}
					placeholder='enter heading here'
				/>
				<RichText
					tagName='h6'
					value={attributes.price}
					onChange={onPriceChange}
					placeholder='enter price here'
				/>
				<RichText
					tagName='p'
					value={attributes.bodyText}
					onChange={onPChange}
					placeholder='enter description here'
				/>
			</div>
		);
	},


	save(props) {

		const { attributes } = props;
		return (
			<div className="infoBox">
				<a href={attributes.link}>
					<h5>{attributes.headingText}</h5>
					<h6>{attributes.price}</h6>
					<p>{attributes.bodyText}</p>
				</a>
			</div>
		);
	},
});
