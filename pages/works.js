import { Container, Heading, SimpleGrid, useColorModeValue, Text } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

// Images
import Jdilla from '../public/images/works/jdilla-gallery.png'
import Clima from '../public/images/works/clima.png';
import Ruleta from '../public/images/works/ruleta.png';
import Mensajeria from '../public/images/works/mensajeria1.jpeg'
import Distracker from '../public/images/works/distracker.png'

const Works = () => {
	
	return(
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Trabajos
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={ 6 }>
				<Section>
					<WorkGridItem id='distracker' title='Distracker' thumbnail={ Distracker }>
						<Text color={useColorModeValue('white', 'black')}>Aplicación de organización de albumes de música</Text>	
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="mensajeria" title="Mensajeria" thumbnail={ Mensajeria }>
						Aplicación de mensajería
					</WorkGridItem>	
				</Section>
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
			</SimpleGrid>
		</Container>
		</Layout>	
	)
}

export default Works;
