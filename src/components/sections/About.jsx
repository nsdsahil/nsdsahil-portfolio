import { Flex, Box, Heading, Button, Container } from "@chakra-ui/react";
import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Link,
	Th,
	Image,
	Tfoot,
	Card,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import "../styles/transitions.css";


/**
 * @author
 * @function About
 **/

export const About = (props) => {
	const [isMore, setIsMore] = React.useState(false);

	const openResume = () => {
		window.open(
			"https://drive.google.com/file/d/1J0TYfcf1nUzj_IDzF5JJKSa4fXJZYeWT/view?usp=drive_link",
			"_blank"
		);
	};
	return (
		<>
			<Flex
				id="about"
				className="slide-in-bottom"
				flexWrap={"wrap"}
				margin={"auto"}
				marginTop={"10%"}
				justifyContent={"space-around"}
				width={["90%", "90%", "85%", "80%", "90%", "80%"]}
			>
				<Box style={{ padding: "0" }} padding={"0%"}>
					<Heading
						className="slide-in-bottom"
						marginBottom={"10%"}
						size={["sm", "md", "lg", "lg", "xl", "4xl"]}
					>
						About Me
					</Heading>
					<Heading color={"grey"} size={["xs", "sm", "md", "md", "md", "md"]}>
						I Really Love To Show My Creativeness
					</Heading>

					<Container
						style={{ marginLeft: "0" }}
						paddingLeft={"0"}
						className="slide-in-bottom"
						fontFamily={"Handlee,cursive"}
						marginTop={["1%", "1%", "3%", "4%", "4%"]}
					>
						Since my childhood, I've harbored a profound curiosity about the
						mechanics of apps and websites. This early interest evolved into a
						formal pursuit when, after completing my 12th, I delved into a
						Bachelor's in Computer Applications (BCA). During my journey through
						higher education, I seized the opportunity to enroll in a Full Stack
						Web Development course at Prepleaf by Masai.
						<br />
						{!isMore && (
							<Button
								size={["xs", "md", "lg", "lg", "lg"]}
								backgroundColor={"#32de84"}
								color={"white"}
								boxShadow={
									"rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
								}
								_hover={{
									backgroundColor: "white",
									color: "#32de84",
								}}
								onClick={() => setIsMore(!isMore)}
								marginBottom={"7%"}
							>
								Read more
							</Button>
						)}
						{isMore && (
							<span>
								Embarking on this educational tandem—BCA and the intensive
								Prepleaf program—I've cultivated a strong foundation. Currently
								navigating the final year of my graduation, I've seamlessly
								integrated my academic knowledge with practical skills, emerging
								as a frontend developer.
								<br />
								The immersive experience at Prepleaf has not only enriched my
								technical capabilities but also propelled me toward a
								comprehensive understanding of web development. My sights are
								set on expanding my expertise further as I transition into a
								full-stack development course.
								<br />
								Beyond the lines of code, my interests extend to exploration.
								Traveling has become a means to satiate my curiosity and foster
								a holistic perspective. In the ever-evolving landscape of
								technology, I find joy in the balance between digital innovation
								and real-world experiences.
								<br />
								As I approach the culmination of my academic journey, I invite
								you to join me on this dynamic venture—where every challenge is
								an opportunity to learn, create, and innovate
								{
									<Button
										size={["xs", "md", "lg", "lg", "lg"]}
										backgroundColor={"#32de84"}
										color={"white"}
										boxShadow={
											"rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
										}
										_hover={{
											backgroundColor: "white",
											color: "#32de84",
										}}
										marginBottom={"2%"}
										onClick={() => setIsMore(!isMore)}
									>
										Close
									</Button>
								}
							</span>
						)}
					</Container>
					<Image
						className="slide-in-bottom"
						src="https://namesignature.net/wp-content/themes/signengine/image_generator/?text=Sahil&angle=13&fontname=font124abc.ttf&imgw=500&imgh=300&fontsize=120&vmargin=0&xpadding=120&bgcolor=ffffff&color=000000&xq=70&ezimgfmt=rs:370x222/rscb5/ng:webp/ngcb5"
					/>
				</Box>
				<Box marginTop={""} textAlign={"center"}>
					<TableContainer>
						<Table
							size={["xs", "sm", "sm", "sm", "sm", "sm"]}
							fontSize={[
								"0.9rem",
								"1.5rem",
								"1.5rem",
								"1.5rem",
								"1.5rem",
								"1.5rem",
							]}
							variant="striped"
							colorScheme="green"
						>
							<TableCaption>Kindly check downloads after clicking</TableCaption>
							<Thead>
								<Tr></Tr>
							</Thead>
							<Tbody>
								<Tr className="pulsate-bck" padding={"1rem"}>
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/user.png" />
									</Td>
									<Td>Age:</Td>
									<Td>21</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/worldwide-location.png" />
									</Td>
									<Td>Residence:</Td>
									<Td>India</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/address.png" />
									</Td>
									<Td>Address:</Td>
									<Td>2\13\6d Shiv Colony,Ayodhya</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/email.png" />
									</Td>
									<Td>Email:</Td>
									<Td>
										<Link>sahilroyal91@gmail.com</Link>
									</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/phone.png" />
									</Td>
									<Td>Phone No:</Td>
									<Td>+91 1234567890</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image src="https://img.icons8.com/ios-filled/50/000000/work.png" />
									</Td>
									<Td>Work:</Td>
									<Td>Available for Freelance</Td>
								</Tr>
							</Tbody>
							<Tfoot></Tfoot>
						</Table>
					</TableContainer>

					<Link
							href="src\components\sections\Sahil-Nishad-Resume.pdf"
							download='Sahil-Nishad-Resume.pdf'
							onClick={openResume}
					>
						<Button
							size={["xs", "md", "lg", "lg", "lg"]}
							backgroundColor={"#32de84"}
							color={"white"}
							boxShadow={
								"rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
							}
							_hover={{
								backgroundColor: "white",
								color: "#32de84",
							}}
						>
							Download cv
						</Button>
					</Link>
				</Box>
			</Flex>
			<Box
				height={"600px"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				width={["90%", "90%", "80%", "70%", "60%", "50%","40%","40%"]}
				margin="auto"
				justifyContent={'space-around'}
			>
				<Heading
					className="slide-in-bottom"
					marginBottom={"10%"}
					size={["md", "md", "lg", "lg", "xl", "4xl"]}
				>
					Education
				</Heading>
				<Flex
				border={'3px solid #32de84'}
				borderRadius={'8px'}
				    width={'100%'}
				    padding={'2%'}
					height={"120px"}
					boxShadow={
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
					}
					justifyContent={"space-around"}
				>
					<Box width={'40%'}><Heading size={'sm'} color="grey">2019-2020</Heading></Box>
					<Box>
						<Heading size="md">Seniour Secondary Education</Heading>
						<Heading size="sm" color="grey">K.T Public School,Ayodhya</Heading>
					</Box>
				</Flex>
				<Flex
				padding={'2%'}
				width={'100%'}
				border={'3px solid #32de84'}
				borderRadius={'8px'}
					boxShadow={
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
					}
					height={"120px"}
					justifyContent={"space-around"}
				>
					<Box width={'40%'}><Heading size="sm" color="grey">2021-2024</Heading></Box>
					<Box>
						<Heading size="md">Bachelor of Computer Application</Heading>
						<Heading size="sm" color="grey">Makhanlal Chaturvedi university,Bhopal</Heading>
					</Box>
				</Flex>
				<Flex
				padding={'2%'}
				border={'3px solid #32de84'}
				borderRadius={'8px'}
				width={'100%'}
					boxShadow={
						"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
					}
					height={"120px"}
					justifyContent={"space-around"}
				>
					<Box width={'40%'}><Heading size="sm" color="grey">2023-2024</Heading></Box>
					<Box>
						<Heading size="md">Full Stack Web Development Course</Heading>
						<Heading size="sm" color="grey">Prepleaf by Masai</Heading>
					</Box>
				</Flex>
			</Box>
		</>
	);
};
