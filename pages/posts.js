import { Container, Heading } from '@chakra-ui/react';
// import { Container, Heading, SimpleGrid } from '@chakra-ui/react';h 
import Layout from '../components/layouts/article';
// import Section from '../components/section';
// import { GridItem } from '../components/grid-item';

// import thumbNail from '../public/images/perfil.png';

const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as="h4" fontSize={20} mb={4}>
				Popular Posts
			</Heading>
			
			{/* <Section delay={0.1}>
				<SimpleGrid columns={[1,2,2]} gap={6}>
					<GridItem 
						href="/"
						title="My fish workflow"
						thumbnail={ thumbNail }	
					/>
					<GridItem 
						href="/"
						title="My fish workflow"
						thumbnail={ thumbNail }	
					/>
					<GridItem 
						href="/"
						title="My fish workflow"
						thumbnail={ thumbNail }	
					/>
					<GridItem 
						href="/"
						title="My fish workflow"
						thumbnail={ thumbNail }	
					/>
					<GridItem 
						href="/"
						title="My fish workflow"
						thumbnail={ thumbNail }	
					/>
				</SimpleGrid>
			</Section> */}
			<h1>Todavía no hay posts :c</h1>
		</Container>
	</Layout>
)


export default Posts; 
