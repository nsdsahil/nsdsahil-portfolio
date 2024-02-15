import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Card, Link, Badge, Heading } from "@chakra-ui/react";
import "../styles/transitions.css";
import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import sears1 from "../assets/sears-screenshots/Screenshot 2024-02-12 231550.png";
import sears2 from "../assets/sears-screenshots/Screenshot 2024-02-12 231858.png";
import sears3 from "../assets/sears-screenshots/Screenshot 2024-02-12 231929.png";
import sears4 from "../assets/sears-screenshots/Screenshot 2024-02-12 231956.png";
import sears5 from "../assets/sears-screenshots/Screenshot 2024-02-12 232019.png";
import sears6 from "../assets/sears-screenshots/Screenshot 2024-02-12 232043.png";
import sears7 from "../assets/sears-screenshots/Screenshot 2024-02-12 232123 copy.png";

import superhero from "../assets/superhero.png";

/**
 * @author
 * @function Projects
 **/

export const Projects = (props) => {
	const images = [a, b, c, d, e, f, g];
	const images2 = [sears1, sears2, sears3, sears4, sears5, sears6, sears7];
	var settings = {
		dots: false,
		infinite: true,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrow: true,
		pauseOnHover: false,
	};
	return (
		<Box id="projects">
			<Heading
				className="tracking-in-expand"
				textAlign={"center"}
				color="black"
				marginTop={"10%"}
				marginBottom={"5%"}
				size={["sm", "md", "lg", "lg", "xl", "3xl"]}
			>
				Recent Projects
			</Heading>
			<Grid height='auto' margin={"auto"}  width={["90%", "80%", "80%", "60%", "60%", "60%"]}  templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={2}>
				<Card
				width={"100%"}	
				height={"680px"}
				
				boxShadow={
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				}
				size={"lg"}
			>
				<Slider style={{ width: "100%" }} {...settings}>
					{images2.map((image) => (
						<div>
							<Image src={image} />
						</div>
					))}
				</Slider>

				<Box padding={"5%"}>
					<Heading>
						Sears-Clone
						<Badge ml="1" fontSize="0.5em" variant="solid" colorScheme="green">
							New
						</Badge>
					</Heading>

					<List size={["sm", "md", "md", "md", "md", "md"]} spacing={3}>
						
						<ListItem>
							Sears is a modern and sophisticated ecommerce platform built using
							the MERN stack. With Sears, you can create, manage, and scale your
							online store effortlessly.
						</ListItem>
						<ListItem>
							
							<Text color="black" fontWeight={"bold"} fontSize="lg">
								Teck Stack
							</Text>
							
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Html
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								javascript
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								React
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Chakra UI
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Node js
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								MongoDB
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Express js
							</Badge>
						</ListItem>
						<ListItem>
							
							<Text color="black" fontWeight={"bold"} fontSize="lg">
								Features
							</Text>
							User Authentication, Product Management, Shopping Cart, Order Management & Search and Filtering
						</ListItem>
					

					</List>
					<Box  marginTop={"5%"} textAlign={"center"}>
						<Link isExternal="true" href="https://github.com/nsdsahil/Sears">
							<Button
								backgroundColor={"black"}
								color={"white"}
								variant="outline"
							>
								Git Hub
							</Button>
						</Link>
						<Link
							isExternal="true"
							href="https://sears-clone.vercel.app/"
						>
							<Button
								backgroundColor={"black"}
								color={"white"}
								variant="outline"
							>
								Live Demo
							</Button>
						</Link>
					</Box>
				</Box>
				
			</Card>
			<Card
			    
                width={"100%"}
				height={["680px"]}
				boxShadow={
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				}
				margin={"auto"}
				size={"lg"}
			>
				<Slider style={{ width: "100%" }} {...settings}>
					{images.map((image) => (
						<div>
							<Image src={image} />
						</div>
					))}
				</Slider>
				<Box padding={"5%"}>
					<Heading>
						Apple Tv+(clone)
						<Badge ml="1" fontSize="0.5em" variant="solid" colorScheme="green">
							New
						</Badge>
					</Heading>
					<List size={["sm", "md", "lg", "lg", "xl", "3xl"]} spacing={3}>
						<ListItem>
							Created a functional website for Apple TV +.Where user can login
							by his/her phone number. Implemented searching,review product and
							watching functionalities with or without mlsPass.
						</ListItem>
						<ListItem>
							
						    <Text color="black" fontWeight={"bold"} fontSize="lg">
								Teck Stack
							</Text>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Html
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								javascript
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								React
							</Badge>
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
								Chakra UI
							</Badge>
						</ListItem>
						<ListItem>
						<Text color="black" fontWeight={"bold"} fontSize="lg">
								Features
							</Text>
							
							Login/Logout functionality, Tow different pages that are free or with pass, Responsive Website design 
						</ListItem>
						
						
					</List>
					
				</Box>
				<Box left={135}  marginTop={"5%"} textAlign={"center"}>
						<Link isExternal="true" href="https://github.com/nsdsahil/Apple-Tv">
							<Button
								backgroundColor={"black"}
								color={"white"}
								variant="outline"
							>
								Git Hub
							</Button>
						</Link>
						<Link
							isExternal="true"
							href="https://apple-6brpnwea5-sahil-nishads-projects.vercel.app/"
						>
							<Button
								backgroundColor={"black"}
								color={"white"}
								variant="outline"
							>
								Live Demo
							</Button>
						</Link>
					</Box>
			</Card>
		
			</Grid>
			
		</Box>
	);
};
