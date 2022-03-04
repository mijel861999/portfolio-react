import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
	return( 
		<Layout title="Clima">
			<Container>
				<Title>
					Clima <Badge>2021</Badge>
				</Title>
				<P>
					Una aplicación para ver el clima en el mundo
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://weather-react-1i3k9s1ta-mijel861999.vercel.app/">
							https://weather-react-1i3k9s1ta-mijel861999.vercel.app/<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React</span>
					</ListItem>	
				</List>

				<WorkImage src="/images/works/clima.png" alt="Inkdrop" />
			</Container>
		</Layout>
	)
}

export default Work;

