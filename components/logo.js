import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	line-height: 20px
	padding: 10px;

	&:hover img {
		transform: rotate(20deg);
	}
`;

const Logo = () => {
	return ( 
		<Link href='/'>
			<a>
				<LogoBox>
					<Text
						color='white'
						fontWeight='bold'
						ml={ 3 }
					>
						Mijel
					</Text>
				</LogoBox>
			</a>
		</Link>
	)
}


export default Logo;
