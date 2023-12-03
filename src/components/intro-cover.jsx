import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import "./styles/font.css";
/**
 * @author
 * @function IntroCover
 **/

export const IntroCov = (props) => {
	return (
		<Box
		    
		    backgroundColor={"#f4fff7"}
			
			overflow={"hidden"}
			position={"relative"}
			// color={"white"}
			height={["600px", "600px", "600px", "600px", "700px", "800px"]}
			
		>	
			<Grid
				position={"relative"}
				height={"100%"}
				width={["100%", "100%", "100%", "100%", "100%", "100%"]}
				margin={"auto"}
				// backgroundColor={"black"}
				// color={"white"}
				templateColumns={[
					"repeat(1, 1fr)",
					"repeat(1, 1fr)",
					"repeat(1, 1fr)",
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
				]}
			>
				<Box
					zIndex={"20"}
					fontSize={["xs", "sm", "md", "lg", "xl", "2xl"]}
					p={["0", "0", "0", "10", "10", "10"]}
					marginTop={["12%", "8%", "8%", "4%", "4%"]}
					position={[
						"relative",
						"relative",
						"relative",
						"absolute",
						"absolute",
					]}
					top={"10%"}
					width={["100%", "100%", "100%", "50%", "40%", "40%"]}
					left={["3%","15%","15%","15%","15%","15%"]}
					marginLeft={['0']}
				>
					<Heading>Hi I'm</Heading>
					<Heading
						size={["xl", "3xl", "3xl", "3xl", "3xl", "3xl"]}
						marginTop={["8%", "1%", "3%", "4%", "4%"]}
					>
						<span className="outlined-text">Sahil</span>{" "}
						<span className="outlined-text">Nishad</span>
					</Heading>
					<Heading fontSize={["xs", "sm", "md", "lg", "xl", "2xl"]}>
						<span className="cursive-sans">i am frontend developer</span>
					</Heading>
					<Container
						style={{ marginLeft: "0" }}
						paddingLeft={"0"}
						width={""}
						fontFamily={"Handlee,cursive"}
						marginTop={["1%", "1%", "3%", "4%", "4%"]}
						
					>
						 Hey there! I'm Sahil Nishad, a front-end React developer with a keen eye for crafting captivating user interfaces. As I pivot towards backend development, I'm geared up to freelance and seamlessly integrate front-end finesse with backend prowess. Let's collaborate to bring a holistic touch to your digital projects!
					</Container>
					<Flex marginTop={["1%", "1%", "3%", "4%", "4%"]}>
						<a href="#about"><Button
						    size={["xs", "md", "lg", "lg", "lg"]}
							backgroundColor={"#32de84"}
							
							color={"white"}
							boxShadow={
								"rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
							}
							href={"#about"}
						>
							About me
						</Button>
						</a>
						<Text />
					</Flex>
				</Box>
				<Flex
				    flexWrap={'wrap'}
					zIndex={"20"}
					position={[
						"relative",
						"relative",
						"relative",
						"absolute",
						"absolute",
					]}
					bottom={["0%", "0%", "5%", "5%", "4%"]}
					marginLeft={["5%", "5%", "5%", "5%", "5%"]}
					right={["0%", "0%", "0%", "10%", "10%"]}
					width={["100%", "100%", "100%", "50%", "40%", "40%"]}
				>
					<Card
					
						marginRight={"2%"}
						height={["7rem", "10rem", "10rem", "10rem", "10rem"]}
						borderLeft={"4px  solid #32de84"}
					>
						<CardHeader>
							<Heading color={"grey"} size={["xs", "sm", "sm", "md", "md"]}>
								Born In
							</Heading>
						</CardHeader>
						<CardBody>
							<Heading size={["xs", "sm", "sm", "md", "md"]}>India</Heading>
						</CardBody>
					</Card>
					<Card
						marginRight={"2%"}
						height={["7rem", "10rem", "10rem", "10rem", "10rem"]}
						borderLeft={"4px  solid #32de84"}
					>
						<CardHeader>
							<Heading  color={'grey'} size={["xs", "sm", "sm", "md", "md"]}>
								Profession
							</Heading>
						</CardHeader>
						<CardBody>
							<Heading size={["xs", "sm", "sm", "md", "md"]}>Web<br/> Developer</Heading>
						</CardBody>
					</Card>
					<Card
						marginRight={"2%"}
						height={["7rem", "10rem", "10rem", "10rem", "10rem"]}
						borderLeft={"4px  solid #32de84"}
					>
						<CardHeader>
							<Heading  color={'grey'} size={["xs", "sm", "sm", "md", "md"]}>
								Date of Birth
							</Heading>
						</CardHeader>
						<CardBody>
							<Heading size={["xs", "sm", "sm", "md", "md"]}>
								03 Dec 2001
							</Heading>
						</CardBody>
					</Card>
				</Flex>
			</Grid>
			<Image
				zIndex={"3"}
				width={["100%", "70%", "50%", "40%", "40%", "35%"]}
				position={"absolute"}
				right={"0"}
				bottom={"0"}
				// src="src\assets\casual-png.png"
				src="src\assets\professional-png.png"
			/>
		</Box>
	);
};
