import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Image } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { Card, Link, Badge, Heading } from "@chakra-ui/react";
import "../styles/transitions.css";
import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import d from "../assets/d.png"
import e from "../assets/e.png"
import f from "../assets/f.png"
import g from "../assets/g.png"


import superhero from '../assets/superhero.png';

/**
 * @author
 * @function Projects
 **/

export const Projects = (props) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrow:true,
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
				Creative Projects
			</Heading>

			<Card
				width={["90%", "90%", "80%", "70%", "60%"]}
				boxShadow={
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				}
				margin={"auto"}
				size={"lg"}
			>
				<Slider style={{ width: "100%" }} {...settings}>
					<div>
						<Image src={a} />
					</div>
					<div>
						<Image src={b} />
					</div>
					<div>
						<Image src={c} />
					</div>
					<div>
						<Image src={d} />
					</div>
					<div>
						<Image src={e} />
					</div>
					<div>
						<Image src={f} />
					</div>
					<div>
						<Image src={g} />
					</div>
				</Slider>
				<Box padding={"10%"}>
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
							<ListIcon as="MdCheckCircle" color="green.500" />
							Login/Logout functionality
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Tow different pages that are free or with pass
						</ListItem>
						{/* You can also use custom icons from react-icons */}
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Responsive Website design
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Click on Demo live button to see the website live
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />Teck Stack
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
					</List>
					<Box marginTop={"5%"} textAlign={"center"}>
						<Link isExternal="true" href="https://github.com/nsdsahil/Apple-Tv">
							<Button
								backgroundColor={"black"}
								color={"white"}
								variant="outline"
								
							>
								Git Hub
							</Button>
						</Link>
						<Link isExternal="true" href="https://apple-6brpnwea5-sahil-nishads-projects.vercel.app/">
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
			<Flex
				margin={"auto"}
				marginTop={"2%"}
				borderRadius={"2%"}
				boxShadow={
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				}
				backgroundColor={"white"}
				width={["90%", "90%", "80%", "70%", "60%"]}
			>
				<Image
					borderLeftRadius={"2%"}
					width={"50%"}
					display={"inline"}
					src={superhero}
				/>
				<Box padding={"2%"} float={"right"}>
					<Heading>
						Resume On SuperHero Theme
						<Badge ml="1" fontSize="0.5em" variant="solid" colorScheme="green">
							New
						</Badge>
					</Heading>
					<List spacing={3}>
						<ListItem>
							Resume based on SuperHero Theme ready to get you a got
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Single Page Resume
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Contains All The Details of Your Resume
						</ListItem>
						{/* You can also use custom icons from react-icons */}
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Click on Demo live button to see the resume live
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />Teck Stack
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							Html
						</Badge>
						<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							javascript
						</Badge>
						<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							Css
						</Badge>
						
							
						</ListItem>
					</List>
					<Box marginTop={"5%"} textAlign={"center"}>
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
							href="https://beautiful-tarsier-cf0548.netlify.app/"
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
			</Flex>
		</Box>
	);
};
