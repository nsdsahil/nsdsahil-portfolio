import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Image,
	Box,
	Flex,
	Button,
	Link,
	useBreakpointValue,
} from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";
import MenuLink from "./menuLink";
import mainlogo from "./assets/mainlogo.svg";
import resume from './SahilNishad-FrontendDeveloper.pdf'

export default function Navbar() {
	const openResume = () => {
		window.open(
			"https://drive.google.com/file/d/1XXDdne9GUERaaEPQy0xV8I5sFrrUD2kP/view?usp=drive_link",
			"_blank"
		);
	};
	const isMobile = useBreakpointValue({
		base: true,
		md: false,
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
			<Box width={["20%","15%","10%","7%"]}><Image width={'100%'}src={mainlogo}/></Box>		

			{!isMobile ? <MenuLink /> : null}

			<Flex alignItems={"center"} width={["50%","30%","20%","20%","15%"]} justifyContent={"space-around"}>
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
					src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
				/>
				</Link>
				{!isMobile ? <Link isExternal={true} href='https://www.instagram.com/nsd_sahil/'>
				<Image
					width={"2rem"}
					height={"2rem"}
					src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
				/> 
				</Link>:null}
				<Link isExternal={true} href='https://github.com/nsdsahil'>
				<Image
					width={"2rem"}
					height={"2rem"}
					src="https://cdn-icons-png.flaticon.com/128/13170/13170533.png"
				/>
				</Link>
				<a
				target="_blank"
				href={resume}
				download='Sahil-Nishad-Resume.pdf'
				onClick={openResume}
				>
				<Button size='sm'  variant="ghost" colorScheme={"green"} 
				backgroundColor={'white'}
				>Resume</Button></a>	
			</Flex>

			{isMobile ? <HamburgerMenu /> : null}
		</Flex>
	);
		}
