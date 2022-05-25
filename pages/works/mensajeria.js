import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
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
				<P>
					Una aplicación para poder intercambiar mensajes
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://ruleta-react.vercel.app/">
							https://github.com/mijel861999/react-express-message-application<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, Redux, React-router, Express, Mysql, socket, JSON Web tokens</span>
					</ListItem>	
				</List>

				<WorkImage src="/images/works/mensajeria1.JPG" alt="Aplicacion de mensajeria" />
				<WorkImage src="/images/works/mensajeria2.JPG" alt="Aplicacion de mensajeria" />
			</Container>
		</Layout>
	)
}

export default Mensajeria;


