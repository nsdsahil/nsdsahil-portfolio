'use client'

import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

import emailjs from 'emailjs-com';

emailjs.init('WTmHq2ZYg4ZPhoLHB');


const confetti = {  
  light: {
    primary: '4299E1', // blue.400
    secondary: 'BEE3F8', // blue.100
  },

  dark: {
    primary: '1A365D', // blue.900
    secondary: '2A4365', // blue.800
  },
}



export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('sahilroyal91@gmail.com')


  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value }
        );
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };
  
        const response = await emailjs.send(
          'service_jh5oggo',
          'template_ixtx49k',
          templateParams
        );
  
        // Handle success or failure
        console.log('Email sent:', response);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };


  




  return (
    <Flex
    
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      backgroundColor={'#f4fff7'}
      id="contact">
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
        <Box > 
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Get in Touch
            </Heading>

            <Stack
             
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: '#32de84',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box target='_blank' as="a" href="https://github.com/nsdsahil">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: '#32de84',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Box>

                <Box target='_blank' as="a" href="https://www.twitter.com/Sahil11690991">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: '#32de84',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound 
                  />
                </Box>

                <Box target='_blank' as="a" href="https://www.linkedin.com/in/sahil-nishad-2b1a4b267/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: '#32de84',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
              width={'100%'}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl as='form' onSubmit={handleSubmit} isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input onChange={handleInputChange}type="text" name="name" placeholder="Your Name" value={formData.name}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input value={formData.email} onChange={handleInputChange} type="email" name="email" placeholder="Your Email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="#32de84"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    width="full">
                    Send Message
                  </Button>   
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}