import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
	return( 
		<Layout title="J Dilla">
			<Container>
				<Title>
					J Dilla <Badge>2022</Badge>
				</Title>
				<P>
					Una landing page de J Dilla
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://mijel861999.github.io/jdilla-gallery/">
							https://mijel861999.github.io/jdilla-gallery/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS y JavaScript</span>
					</ListItem>	
				</List>

				<WorkImage src="/images/works/jdilla-gallery.png" alt="Inkdrop" />
			</Container>
		</Layout>
	)
}

export default Work;
