import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';


const styles = {
	global: props => ({
		body: {
			bg: mode('#1A2601', '#FFFFFF')( props ),
			color: mode('white', 'black')
		}
	})
}

const components = {
	Heading: {
		baseStyle: props => ({
			color: mode('white', 'black')(props)
		})
	},
	heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20, 
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			}
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('white', 'black')(props),
			textUnderlineOffset: 3
		})
	},
	Heading: {
		baseStyle: props => ({
			color: mode('white', 'black')(props)
		})
	},
}

const fonts = {
	heading: "'JetBrains Mono'",
	body: "'JetBrains Mono'"
}

const colors = {
	glassTeal: '#88ccca'
}

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const theme = extendTheme({
	config, 
	styles, 
	components, 
	colors, 
	fonts
})

export default theme;
