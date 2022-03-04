import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

// Images
import Jdilla from '../public/images/works/jdilla-gallery.png'
import Clima from '../public/images/works/clima.png';
import Ruleta from '../public/images/works/ruleta.png';

const Works = () => {
	
	return(
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Trabajos
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={ 6 }>
				<Section>
					<WorkGridItem id="jdilla" title="JDilla" thumbnail={ Jdilla }>
						Una landing page de J Dilla
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="clima" title="Clima" thumbnail={ Clima }>
						Una aplicación del clima
					</WorkGridItem>	
				</Section>
				<Section>
					<WorkGridItem id="ruleta" title="Ruleta" thumbnail={ Ruleta }>
						Una aplicación de ruleta
					</WorkGridItem>	
				</Section>
			</SimpleGrid>
		</Container>
		</Layout>	
	)
}

export default Works;
