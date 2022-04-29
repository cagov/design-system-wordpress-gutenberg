const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        namespace: "cagov-design-system",
        category: "cagov-design-system",
        textdomain: 'cagov-design-system',
        dashicon: 'format-aside',
		description: 'Design System component description, pull from design system website or project assets from PM',
		editorScript: "cagov-ds-gutenberg",
		editorStyle: "cagov-ds-gutenberg",
		style: "cagov-ds-gutenberg-style",
		supports: {
			"html": true
		},
		customScripts: {
			postbuild: "npm i @cagov/$npm_package_name"
		}
    },
};
