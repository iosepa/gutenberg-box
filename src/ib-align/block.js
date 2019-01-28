/**
 * BLOCK: ib-align
 *
 */

//  Import CSS.
import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 */

registerBlockType(
	'iob/block-ib-align', {

		title: __('ib-align'),
		icon: {
			background: '#4a81c8',
			foreground: '#e5e5e5',
			src: 'grid-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		},
		category: 'layout',
		keywords: [
			__('ib-align'),
			__('iosepa.io'),
		],
		supports: {
			align: ['center', 'wide', 'full'],
			html: false,
		},

		edit: props => {
			const { attributes: { }, } = props;

			return (
				<div className="ib-align" >
					<InnerBlocks
						allowedBlocks={['iob/block-info-box']}
					/>
				</div>
			);
		},


		save: props => {
			const { attributes: { }, } = props;

			return (
				<div className="ib-align" >
					<InnerBlocks.Content />

				</div >
			);
		},
	});


