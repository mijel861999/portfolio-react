import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue 
} from '@chakra-ui/react';
import Section from '../components/section';

const Page = () => {
	return(
		<Container>
			<Box 
				borderRadius="lg" 
				bg={ useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') } 
				mb={6} 
				mt={6}
				p={3} 
				align="center"
			>
				Hello, soy Miguel, soy un desarrollador fontend de Perú!
			</Box>


			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Miguel Castillo 
					</Heading>

					<p>Desarrollador / Músico / Diseñador</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
				>
					<Image 
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="150px"
						display="inline-block"
						borderRadius="full"
						src="/images/perfil.png"
						alt="Profile Image"
					/>
				</Box>
			</Box>

			<Section delay={ 0.1 }>
				<Heading 
					as="h3"
					variant="section-title"	
				>
					Work
				</Heading>
				<p>Paragraph</p>
			</Section>
		</Container>
	)
}

export default Page;
