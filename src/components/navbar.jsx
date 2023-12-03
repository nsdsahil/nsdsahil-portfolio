import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Image,
	Box,
	Flex,
	Link,
	useBreakpointValue,
} from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";
import MenuLink from "./menuLink";

export default function Navbar() {
	const isMobile = useBreakpointValue({
		base: true,
		md: true,
		sm: true,
		xs: true,
		lg: false,
	});

	return (
		<Flex
		color={"white"}
		// backgroundColor={'#3b3c36'}
		backgroundColor={'#32de84'}
			zIndex={"23"}
			position={"fixed"}	
			width={"100%"}
			top={"0"} 
			height={"4rem"}
			boxShadow={
				 "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
			}
			alignItems={"center"}
			justifyContent={"space-around"}
		>
			<Box width={["20%","15%","10%","7%"]}><Image width={'100%'}src="src\assets\logo-no-background.svg"/></Box>		

			{!isMobile ? <MenuLink /> : null}

			<Flex width={["30%","20%","15%","10%"]} justifyContent={"space-around"}>
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

			{isMobile ? <HamburgerMenu /> : null}
		</Flex>
	);
		}
