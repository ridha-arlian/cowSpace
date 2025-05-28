import { HStack } from '@chakra-ui/react'
import { LeftContent } from './LeftContent'
import { RightContent } from './RightContent'

export type MenuProps = Array<{
  label: string
  uri: string
}>

const menuItems: MenuProps = [
  {
    label: 'Sign Up',
    uri: '',
  },
  {
    label: 'Login',
    uri: '/login',
  }
]

export function Navbar() {
  return (
    <HStack justifyContent="space-between" alignItems="center" p="3" bg="blue.normal">
      <LeftContent/>
      <RightContent items={menuItems}/>
    </HStack>
  )
}