import { Navbar, Text, Avatar, Dropdown } from '@nextui-org/react'
import Link from 'next/link'

export default function Nav() {
  const collapseItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]

  return (
    <>
      <Navbar shouldHideOnScroll isCompact variant='floating'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%'
            }
          }}
        >
          <AcmeLogo />
          <Text b color='inherit'>
            ABDULLAH MAHMUD
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='highlight-rounded'
        >
          <Link href='/'>
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Link href='/blog'>
            <Navbar.Link>Blog</Navbar.Link>
          </Link>
          <Link href='/blog'>
            <Navbar.Link>Pricing</Navbar.Link>
          </Link>
          <Link href='/blog'>
            <Navbar.Link>Company</Navbar.Link>
          </Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end'
            }
          }}
        >
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='secondary'
                  size='md'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='secondary'
              onAction={actionKey => console.log({ actionKey })}
            >
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key='team_settings'>Team Settings</Dropdown.Item>
              <Dropdown.Item key='analytics' withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key='system'>System</Dropdown.Item>
              <Dropdown.Item key='configurations'>Configurations</Dropdown.Item>
              <Dropdown.Item key='help_and_feedback' withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='secondary'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : ''
              }}
              isActive={index === 2}
            >
              <Link
                // color='inherit'
                // css={{
                //   minWidth: '100%'
                // }}
                href='#'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

import { Spacer } from '@nextui-org/react'

export const AcmeLogo = () => (
  <svg
    className=''
    fill='none'
    height='36'
    viewBox='0 0 32 32'
    width='36'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect fill='var(--secondary)' height='100%' rx='16' width='100%' />
    <path
      clipRule='evenodd'
      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
)
