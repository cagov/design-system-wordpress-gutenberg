/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	let { 
		setAttributes,
		attributes: {
		   icon,
		   message
	   }, 
   } = props;

   const blockProps = useBlockProps();

   
	 const onChangeMsg = ( newMsg ) => {
		setAttributes( { message: newMsg } );
	};

	return (
		<div {...blockProps}>
			<cagov-page-alert
				data-icon={icon}
				data-message={message}
				class="cagov-page-alert"
				>
				<RichText
					tagName="span"
					placeholder={__('Write alert…', 'cagov-design-system')}
					value={message}
					onChange={onChangeMsg}
				/>
			</cagov-page-alert>
		</div>
	);
}
