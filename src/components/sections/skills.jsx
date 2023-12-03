import React from "react";
import { Box, Card, Image, Flex, Heading, CardBody } from "@chakra-ui/react";

/**
 * @author
 * @function Skills
 **/

export const Skills = () => {
	return (
		<>
			
			<Box
			id='skills'
				backgroundImage={
					"url(https://images.unsplash.com/photo-1621743018966-29194999d736?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
				}
				backgroundColor={"rgba(255, 255, 255, 0.211)"}
                padding={'5%'}
				backgroundSize={"cover	"}
				backgroundPosition={'center'}
				backgroundAttachment={'fixed'}
			>
				<Heading textAlign={"center"} 
				color={'white'}
				marginTop={"10%"} size={"3xl"}>
				Technologies
			</Heading>
				<Flex
				    
					height={"auto"}
					justifyContent={"Center"}
					flexWrap={"wrap"}	
					
					position={"relative"}
				
					width={"100%"}
					margin={"auto"}
				>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/875/875209.png"
						/>
						<Heading>React</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/10238/10238256.png"
						/>
						<Heading>Chakra UI</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/fluency/48/tailwind_css.png"
						/>
						<Heading>Tailwind</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
						/>
						<Heading>Python</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
						/>
						<Heading>Css</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
						/>
						<Heading>Html</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
						/>
						<Heading>JavaScript</Heading>
					</Box>

					
				</Flex>
				<Heading textAlign={"center"} 
				color={'white'}
				marginTop={"10%"} size={"3xl"}>
				Tools
				</Heading>
				<Flex
					height={"auto"}
					justifyContent={"Center"}
					flexWrap={"wrap"}	
					// paddingTop={"25%"}
					// paddingRight={"10%"}
					// paddingBottom={"2%"}
					position={"relative"}
					
					// backgroundColor={"rgba(255, 255, 255, 0.104)"}
					
				
					width={"100%"}
					margin={"auto"}
				>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png"
						/>
						<Heading>vsCode</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/?size=48&id=LQTr8UsXQ1jm&format=png"
						/>
						<Heading>Replit</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/fluency/48/vite.png"
						/>
						<Heading>Vite</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/?size=80&id=YsPdguLCFOMH&format=png"
						/>
						<Heading>Netlify</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://img.icons8.com/?size=80&id=Ncs7zFFjcqeE&format=png"
						/>
						<Heading>Code Sand Box</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256"
						/>
						<Heading>Postman</Heading>
					</Box>
					<Box
						boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}
						backgroundColor={'rgba(9, 9, 9, 0.337)'}
						paddingTop={'1%'}
						marginLeft={"5%"}
						textAlign={"center"}

						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="50%"
							display={"block"}
							margin={"auto"}
							src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
						/>
						<Heading>Git Hub</Heading>
					</Box>

					
				</Flex>
			</Box>
		</>
	);
};
