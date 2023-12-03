import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,Image,Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

/**
* @author
* @function MenuLink
**/

 const MenuLink = () => {
  return(
    <Breadcrumb fontSize={'1.5rem'} spacing='35px' separator='  '>
    <BreadcrumbItem>
    <BreadcrumbLink isCurrentPage href='#home'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#about'>About Me</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#projects'>Projects</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#skills'>Skills</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='#contact'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
   )
  }
export default MenuLink