import NextLink from 'next/link';
import { 
	Button,
	Container, 
	Box, 
	Icon,
	Heading, 
	Image, 
	Link,
	SimpleGrid,
	List,
	ListItem,
	useColorModeValue 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Components
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoDiscord
} from 'react-icons/io5';

const Page = () => {
	return(
		<Layout>
		<Container>
			<Box
				align="center"
				my={3}
			>
				<Image 
						borderColor="whiteAlpha.500"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="350px"
						display="inline-block"
						src="/evangelion.gif"
						alt="Eva"
					/>
			</Box>
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
						src="/images/perfil.jpg"
						alt="Profile Image"
					/>
				</Box>
			</Box>

			<Section delay={ 0.3 }>
				<Heading 
					as="h3"
					variant="section-title"	
				>
					Work
				</Heading>
				<Paragraph>Miguel is a freelance and a full passion for building digital services/stu for all things lauchings products, from way to solving real - life problems with hanging out with his camera. Currently, product called { '' }
					<NextLink href="/works/inkdrop">
						<Link>
							Inkdropo
						</Link>
					</NextLink>
					.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
							My Portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1999</BioYear>
					Nací en Lima, Perú
				</BioSection>
				<BioSection>
					<BioYear>2015</BioYear>
					Empecé a estudiar ingeniería de Industrial en la Universidad de ingeniería y tecnología (UTEC)
				</BioSection>
			</Section>
			
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Mis aficiones
				</Heading>
				<Paragraph>
					Art, Music,{''}
					<Link href="https://illust.odoruinu.net/">
						Drawing
					</Link>
					,Playing Drums, {''}
				</Paragraph>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/mijel861999" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
								@mijel861999	
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://www.instagram.com/mijelpalcabello/" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
								@mijelpalcabello
							</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page;
