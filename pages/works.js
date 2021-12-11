import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Evangelion from '../public/images/works/evangelion.png';

const Works = () => {
	
	return(
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={ 6 }>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={ Evangelion }>
						A markdown note-taking app
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={ Evangelion }>
						A markdown note-taking app
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={ Evangelion }>
						A markdown note-taking app
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={ Evangelion }>
						A markdown note-taking app
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={ Evangelion }>
						A markdown note-taking app
					</WorkGridItem>	
				</Section>
			</SimpleGrid>
		</Container>
		</Layout>	
	)
}

export default Works;
