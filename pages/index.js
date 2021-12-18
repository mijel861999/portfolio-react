import NextLink from 'next/link';
import { 
	Button,
	Container, 
	Box, 
	Icon,
	Heading, 
	Image, 
	Link,
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
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
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
				Hola, soy Miguel, soy un desarrollador de Perú!
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
				<Paragraph>Miguel es un desarrollador de aplicaciones, también es un fanático de la música, tiene un proyecto musical llamado { '' }
						<Link href="https://www.instagram.com/mitt_awing/">
							Mitt Awing
						</Link>
					.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
							Mi portafolio
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
					Termine el colegio en Saco oliveros
				</BioSection>
				<BioSection>
					<BioYear>2016</BioYear>
					Empecé a estudiar ingeniería de Industrial en la Universidad de ingeniería y tecnología (UTEC)
				</BioSection>
				<BioSection>
					<BioYear>2019</BioYear>
					Empecé a estudiar Ingeniería de sistemas en la Universidad Nacional Federico Villarreal
				</BioSection>
			</Section>
			
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Mis aficiones
				</Heading>
				<Paragraph>
					Art, Music ,{''}
					<Link href="https://illust.odoruinu.net/">
						 Drawing
					</Link>
					,Making beats {''}
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
					<ListItem>
						<Link href="https://twitter.com/home" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
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
