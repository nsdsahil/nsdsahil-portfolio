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
				id="skills"
				backgroundImage={
					"url(https://images.unsplash.com/photo-1621743018966-29194999d736?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
				}
				backgroundColor={"rgba(255, 255, 255, 0.211)"}
				padding={"5%"}
				backgroundSize={"cover	"}
				backgroundPosition={"center"}
				backgroundAttachment={"fixed"}
			>
				<Heading
					textAlign={"center"}
					color={"white"}
					marginTop={"10%"}
					size={"3xl"}
				>
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
						marginLeft={"5%"}
						textAlign={"center"}
						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
						b
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
					<Box
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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

					<Box
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						// backgroundColor={"white"}
						paddingTop={"1%"}
						marginLeft={"5%"}
						textAlign={"center"}
						width={"200px"}
						height={"200px"}
						marginTop={"2%"}
						color="white"
					>
						<Image
							width="60%"
							display={"block"}
							margin={"auto"}
							src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_node_icon_130301.png"
						/>
						<Heading>Node js</Heading>
					</Box>

					<Box
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
							src="https://cdn.icon-icons.com/icons2/2415/PNG/96/mongodb_original_logo_icon_146424.png"
						/>
						<Heading>MongoDB</Heading>
					</Box>
					<Box
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
							src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png"
						/>	
						<Heading>Express js</Heading>
						
					</Box>
				</Flex>
				<Heading
					textAlign={"center"}
					color={"white"}
					marginTop={"10%"}
					size={"3xl"}
				>
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
						// boxShadow={
						// 	"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
						// }
						boxShadow={
							"rgb(0, 217, 138) 0px 2px 4px, rgb(0, 217, 138) 0px 7px 13px 0px, rgb(0, 217, 138)  0px 0px 0px inset"
						}
						backgroundColor={"rgba(0, 0, 0, 0.603)"}
						paddingTop={"1%"}
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
							src="data:image/png;base64,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"
						/>
						<Heading>Git Hub</Heading>
					</Box>
				</Flex>
			</Box>
		</>
	);
};
