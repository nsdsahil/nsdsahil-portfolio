"use client";

import { ReactNode } from "react";
import logoblack from '../assets/logo-black.png'
import {
	Box,
	Container,
	SimpleGrid,
	Stack,
	Image,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Flex, Link } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid
					templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
					spacing={8}
				>
					<Stack spacing={6}>
						<Box></Box>
						<Text fontSize={"sm"}>
							© 2022 Chakra Templates. All rights reserved
						</Text>
						<Box width={["20%", "15%", "10%", "7%", "10%", "30%"]}>
							<Image width={"100%"} src={logoblack} />
						</Box>
						
			<Flex width={'100%'} justifyContent={"space-around"}>
				<Link isExternal={true} href='https://www.twitter.com/Sahil11690991'>
				<Image
				   
					width={"2rem"}
					height={"2rem"}
					src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"
					
				/>
				</Link>
				<Link isExternal={true} href='https://www.linkedin.com/in/sahil-nishad-2b1a4b267/'>
				<Image
					width={"2rem"}
					height={"2rem"}
					src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
				/>
				</Link>
				<Link isExternal={true} href='https://www.instagram.com/nsd_sahil/'>
				<Image
					width={"2rem"}
					height={"2rem"}
					src="https://img.icons8.com/?size=48&id=32323&format=png"
				/>
				</Link>
				<Link isExternal={true} href='https://github.com/nsdsahil'>
				<Image
					width={"2rem"}
					height={"2rem"}
					src="https://cdn-icons-png.flaticon.com/128/13170/13170533.png"
				/>
				</Link>
			</Flex>
					</Stack>
					<Stack align={"flex-start"}>
						Product
						<Box as="a" href={"#"}>
							Overview
						</Box>
						<Box as="a" href={"#"}>
							Features
						</Box>
						<Box as="a" href={"#"}>
							Tutorials
						</Box>
						<Box as="a" href={"#"}>
							Pricing
						</Box>
						<Box as="a" href={"#"}>
							Releases
						</Box>
					</Stack>
					<Stack align={"flex-start"}>
						Company
						<Box as="a" href={"#"}>
							About
						</Box>
						<Box as="a" href={"#"}>
							Press
						</Box>
						<Box as="a" href={"#"}>
							Careers
						</Box>
						<Box as="a" href={"#"}>
							Contact
						</Box>
						<Box as="a" href={"#"}>
							Partners
						</Box>
					</Stack>
					<Stack align={"flex-start"}>
						Support
						<Box as="a" href={"#"}>
							Help Center
						</Box>
						<Box as="a" href={"#"}>
							Terms of Service
						</Box>
						<Box as="a" href={"#"}>
							Legal
						</Box>
						<Box as="a" href={"#"}>
							Privacy Policy
						</Box>
						<Box as="a" href={"#"}>
							Status
						</Box>
					</Stack>
					<Stack align={"flex-start"}>
						Follow Us
						<Box as="a" href={"#"}>
							Facebook
						</Box>
						<Box as="a" href={"#"}>
							Twitter
						</Box>
						<Box as="a" href={"#"}>
							Dribbble
						</Box>
						<Box as="a" href={"#"}>
							Instagram
						</Box>
						<Box as="a" href={"#"}>
							LinkedIn
						</Box>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
