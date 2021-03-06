import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
import { Global } from '@emotion/react';


export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox cursor="pointer">
			<Image
				src={ thumbnail }
				alt={title}
				className="grid-item-thumbnail"
				placeholder="blur"
				loading="lazy"
			/>
			<LinkOverlay href={ href } target="_blank">
				<Text mt={2}>
					{ title }
				</Text>
			</LinkOverlay>
			<Text color={useColorModeValue('white', 'black')} fontSize={14}>{ children }</Text>
		</LinkBox>
	</Box>
)	


export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text color={useColorModeValue('white', 'black')} mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text color={useColorModeValue('white', 'black')} fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)



export const GridItemStyle = () => (
	<Global
		style={`
			.grid-item-thumbnail {
				border-radius: 12px;
			}
		`}
	/>
)
