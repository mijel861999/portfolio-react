import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
	return(
		<Container>
			<Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
				Hello, soy Miguel, soy un desarrollador fontend de Perú!
			</Box>


			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Miguel Castillo 
					</Heading>

					<p>Desarrollador / Músico / Diseñador</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page;
