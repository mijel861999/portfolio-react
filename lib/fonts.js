import { Global } from '@emotion/react';


export const Fonts = () => {
	<Global 
		styles={`
			@font-face{
  			font-family: 'JetBrainsMono';
				font-style: normal;
				font-weight: 700;
				font-display: swap;
				src: url('../assets/fonts/JetBrainsMonoNL-Regular.ttf')
  			font-weight: 400;
  			font-style: normal;
			}
		`}
	/>
}
