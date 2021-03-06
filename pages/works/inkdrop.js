import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
	return( 
		<Layout title="Inkdrop">
			<Container>
				<Title>
					Inkdrop <Badge>2016</Badge>
				</Title>
				<P>
					Amarkdown note-taking app with 100+
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://inkdrop.app/">
							https://inkdrop.app/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux/iOS/Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>NodeJS, Electron, React Native</span>
					</ListItem>
					<ListItem>
						<Meta>Blogpost</Meta>
						<Link href="https://blog.inkdrop.app/">
							Como solucione los errores <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>

				<WorkImage src="/images/works/evangelion.png" alt="Inkdrop" />
			</Container>
		</Layout>
	)
}

export default Work;
