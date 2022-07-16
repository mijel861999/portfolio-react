import { Container, Badge, Link, List, ListItem, useColorModeValue, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
	return( 
		<Layout title="Distracker">
			<Container m={3}>
				<Title>
					Distracker <Badge>2022</Badge>
				</Title>
				<Text color={useColorModeValue('white', 'black')}>
					Aplicación para poder organizar y puntuar albumes de música
				</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://distracker.vercel.app/">
							https://distracker.vercel.app/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline' color={useColorModeValue('white', 'black')}>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline' color={useColorModeValue('white', 'black')}>React, Chakra UI</Text>
					</ListItem>
				</List>

				<WorkImage src="/images/works/distracker.png" alt="Distracker" />
				<WorkImage src="/images/works/distracker2.png" alt="Distracker" />
			</Container>
		</Layout>
	)
}

export default Work;
