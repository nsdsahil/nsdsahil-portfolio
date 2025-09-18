import { Flex, Box, Heading, Button, Container } from "@chakra-ui/react";
import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Link,
	Text, VStack,
	Th,
	Image,
	Tfoot,
	Card,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import "../styles/transitions.css";
import resume from "../sahil-nishad-fullstack.pdf";

/**
 * @author
 * @function About
 **/

export const About = (props) => {
	const [isMore, setIsMore] = React.useState(false);

	const openResume = () => {
		window.open(
			"https://drive.google.com/file/d/1oMac0PAeOeTqO3G0Ya4bIQYoIIuKe1NH/view?usp=sharing",
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
				<Box padding="0%">
  <Heading
    className="slide-in-bottom"
    marginBottom="6%"
    size={["sm", "md", "lg", "lg", "xl", "4xl"]}
    textAlign="center"
  >
    About Me
  </Heading>

  <Heading
    color="grey"
    size={["xs", "sm", "md", "md", "md", "md"]}
    textAlign="center"
    fontWeight="medium"
  >
    Crafting Ideas into Interactive Experiences
  </Heading>

  <Container
    className="slide-in-bottom"
    fontFamily={"Handlee, cursive"}
    marginTop={["2%", "2%", "3%", "4%", "4%"]}
    textAlign="justify"
  >
    Since my childhood, I’ve been deeply curious about how apps and websites
    function behind the scenes. This passion guided me to pursue a
    <b> Bachelor’s in Computer Applications (BCA)</b> while also completing an
    intensive <b>Full Stack Web Development course</b> at Prepleaf by Masai.
    <br />
    <br />
    {!isMore && (
      <Button
        size={["xs", "sm", "md", "md", "lg"]}
        backgroundColor="#32de84"
        color="white"
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
        }
        _hover={{
          backgroundColor: "white",
          color: "#32de84",
        }}
        onClick={() => setIsMore(!isMore)}
        marginBottom="7%"
      >
        Read More
      </Button>
    )}

    {isMore && (
      <Box>
        <Text mb="4">
          Throughout my journey, I’ve gained not just academic knowledge but
          also <b>hands-on professional experience</b>. Currently, I’m working
          as a <b>Software Engineer at Digital Darwin (Virtual)</b>, where I
          develop scalable React applications, integrate APIs, and ensure smooth
          state management. Before this, I worked as a{" "}
          <b>Frontend Developer Intern</b>, which strengthened my ability to
          collaborate in teams and build clean, maintainable code.
        </Text>

        <Text mb="4">
          My expertise lies in <b>React.js, React Native, Redux, WebSockets, and
          Vue.js</b>. I enjoy building <b>responsive, high-performance user
          interfaces</b> that combine functionality with creativity.
        </Text>

        <Text mb="4">
          Outside of coding, I love <b>traveling and exploring</b>. It keeps me
          inspired, gives me fresh perspectives, and balances my passion for
          digital innovation with real-world experiences.
        </Text>

        <Text mb="4">
          As I step further into my career, I’m eager to continue expanding into
          full-stack development, contribute to impactful projects, and push the
          boundaries of what I can build.
        </Text>

        <Button
          size={["xs", "sm", "md", "md", "lg"]}
          backgroundColor="#32de84"
          color="white"
          boxShadow={
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, #32de84 0px 10px 10px"
          }
          _hover={{
            backgroundColor: "white",
            color: "#32de84",
          }}
          marginBottom="2%"
          onClick={() => setIsMore(!isMore)}
        >
          Close
        </Button>
      </Box>
    )}
  </Container>

  <Image
    className="slide-in-bottom"
    src="https://namesignature.net/wp-content/themes/signengine/image_generator/?text=Sahil&angle=13&fontname=font124abc.ttf&imgw=500&imgh=300&fontsize=120&vmargin=0&xpadding=120&bgcolor=ffffff&color=000000&xq=70&ezimgfmt=rs:370x222/rscb5/ng:webp/ngcb5"
    marginTop="5%"
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
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/user.png" />
									</Td>
									<Td>Age:</Td>
									<Td>21</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/worldwide-location.png" />
									</Td>
									<Td>Residence:</Td>
									<Td>India</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/address.png" />
									</Td>
									<Td>Address:</Td>
									<Td>2\13\6d Shiv Colony,Ayodhya</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/email.png" />
									</Td>
									<Td>Email:</Td>
									<Td>
										<Link>sahilroyal91@gmail.com</Link>
									</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/phone.png" />
									</Td>
									<Td>Phone No:</Td>
									<Td>+91 1234567890</Td>
								</Tr>
								<Tr className="pulsate-bck">
									<Td>
										<Image width={"1.5rem"} src="https://img.icons8.com/ios-filled/50/000000/work.png" />
									</Td>
									<Td>Work:</Td>
									<Td>Available for Freelance</Td>
								</Tr>
							</Tbody>
							<Tfoot></Tfoot>
						</Table>
					</TableContainer>

					<Link
						href={resume}
						download='Sahil-Nishad-Resume.pdf'
						onClick={openResume}
					>
						<Button
							size={["xs", "md", "lg", "lg", "lg"]}
							backgroundColor={"#32de84"}
							color={"white"}
							boxShadow={
								"rgba(0, 0, 0, 0.1) 0px 15px 25px, #32de84 0px 2px 20px"
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
			<Education />
		</>
	);
};
const Education = () => {
	return (
		<Box
			py={10}
			px={5}
			maxW={["95%", "90%", "80%", "70%"]}
			mx="auto"
			textAlign="center"
		>
			{/* Section Heading */}
			<Heading
				className="slide-in-bottom"
				mb={10}
				size={["md", "lg", "xl", "2xl"]}
				// color="#32de84"
				// borderBottom="4px solid #32de84"
				display="inline-block"
				pb={2}
			>
				Education
			</Heading>

			<VStack spacing={8} align="stretch">
				{/* Education Item */}
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
					p={5}
					borderLeft={{ base: "none", md: "6px solid #32de84" }}
					borderTop={{ base: "6px solid #32de84", md: "none" }}
					borderRadius="12px"
					boxShadow="0 4px 15px rgba(0,0,0,0.1)"
					bg="white"
					_hover={{ transform: "translateY(-5px)", transition: "0.3s ease" }}
				>
					<Box textAlign="left">
						<Heading size="md">Senior Secondary Education</Heading>
						<Text fontSize="sm" color="gray.500">
							K.T Public School, Ayodhya
						</Text>
					</Box>
					<Text fontWeight="bold" color="#32de84">
						2019 - 2020
					</Text>
				</Flex>

				{/* Second */}
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
					p={5}
					borderLeft={{ base: "none", md: "6px solid #32de84" }}
					borderTop={{ base: "6px solid #32de84", md: "none" }}
					borderRadius="12px"
					boxShadow="0 4px 15px rgba(0,0,0,0.1)"
					bg="white"
					_hover={{ transform: "translateY(-5px)", transition: "0.3s ease" }}
				>
					<Box textAlign="left">
						<Heading size="md">Bachelor of Computer Application</Heading>
						<Text fontSize="sm" color="gray.500">
							Makhanlal Chaturvedi University, Bhopal
						</Text>
					</Box>
					<Text fontWeight="bold" color="#32de84">
						2021 - 2024
					</Text>
				</Flex>

				{/* Third */}
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
					p={5}
					borderLeft={{ base: "none", md: "6px solid #32de84" }}
					borderTop={{ base: "6px solid #32de84", md: "none" }}
					borderRadius="12px"
					boxShadow="0 4px 15px rgba(0,0,0,0.1)"
					bg="white"
					_hover={{ transform: "translateY(-5px)", transition: "0.3s ease" }}
				>
					<Box textAlign="left">
						<Heading size="md">Full Stack Web Development</Heading>
						<Text fontSize="sm" color="gray.500">
							Prepleaf by Masai
						</Text>
					</Box>
					<Text fontWeight="bold" color="#32de84">
						2023 - 2024
					</Text>
				</Flex>
			</VStack>
		</Box>
	);
};