import { Container, Badge, Link, List, ListItem, useColorModeValue, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Mensajeria = () => {
	return( 
		<Layout title="Mensajeria">
			<Container>
				<Title>
					Mensajeria <Badge>2022</Badge>
				</Title>
				<Text color={useColorModeValue('white', 'black')}>
					Una aplicación para poder intercambiar mensajes
				</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://ruleta-react.vercel.app/">
							https://github.com/mijel861999/react-express-message-application<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline' color={useColorModeValue('white', 'black')}>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline' color={useColorModeValue('white', 'black')}>React, Redux, React-router, Express, Mysql, socket, JSON Web tokens</Text>
					</ListItem>	
				</List>

				<WorkImage src="/images/works/mensajeria1.JPG" alt="Aplicacion de mensajeria" />
				<WorkImage src="/images/works/mensajeria2.JPG" alt="Aplicacion de mensajeria" />
			</Container>
		</Layout>
	)
}

export default Mensajeria;


