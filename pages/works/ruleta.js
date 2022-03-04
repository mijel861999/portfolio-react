import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
	return( 
		<Layout title="Ruleta">
			<Container>
				<Title>
					Ruleta <Badge>2021</Badge>
				</Title>
				<P>
					Una aplicación para hacer apuestas
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://ruleta-react.vercel.app/">
							https://ruleta-react.vercel.app/<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, Redux, React-router</span>
					</ListItem>	
				</List>

				<WorkImage src="/images/works/clima.png" alt="Inkdrop" />
			</Container>
		</Layout>
	)
}

export default Work;


