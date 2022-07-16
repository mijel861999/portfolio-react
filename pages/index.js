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
	Text,
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
				bg={ useColorModeValue('#98A668', '#FFFFFF') } 
				color={useColorModeValue('white', 'black')}
				mb={6} 
				mt={6}
				p={3} 
				align="center"
			>
				Hola, soy Miguel, soy un desarrollador y diseñador web de Perú!
			</Box>


			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading className="text_effect" as="h2" variant="page-title">
						Miguel Castillo 
					</Heading>

					<Text color={useColorModeValue('white', 'black')}>Desarrollador / Diseñador / Músico</Text>
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
					mb={2}
					as="h3"
					variant="section-title"	
				>
					Descripción
				</Heading>
				<Text color={useColorModeValue('white', 'black')}>Soy un desarrollador de aplicaciones, también un fanático de la música, tengo un proyecto musical llamado { '' }
						<Link href="https://www.instagram.com/mitt_awing/">
							Mitt Awing
						</Link>
					.
				</Text>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
							Mi portafolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.3} color={useColorModeValue('white', 'black')}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection color={useColorModeValue('white', 'black')}>
					<BioYear>1999</BioYear>
					Nací en Lima, Perú
				</BioSection>
				<BioSection color={useColorModeValue('white', 'black')}>
					<BioYear>2015</BioYear>
					Termine el colegio en Saco oliveros
				</BioSection>
				<BioSection color={useColorModeValue('white', 'black')}>
					<BioYear>2016</BioYear>
					Empecé a estudiar ingeniería de Industrial en la Universidad de ingeniería y tecnología (UTEC)
				</BioSection>
				<BioSection color={useColorModeValue('white', 'black')}>
					<BioYear>2019</BioYear>
					Empecé a estudiar Ingeniería de sistemas en la Universidad Nacional Federico Villarreal
				</BioSection>
			</Section>
			
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title" >
					Mis aficiones
				</Heading>
				<Text color={useColorModeValue('white', 'black')}>	
					Art, Music ,{''}
					<Link href="https://www.instagram.com/migankhel/">
						PixelArt 
					</Link>
					,  {' '}
					<Link href="https://www.instagram.com/mitt_awing/">
						Beats
					</Link>	
					 {''}
				</Text>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Redes Sociales
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
						<Link href="https://twitter.com/MijelDev" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
								@MijelDev
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
