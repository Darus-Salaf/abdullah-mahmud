import { Navbar, Text, Avatar, Dropdown } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillSetting } from 'react-icons/ai'

export default function Nav() {
  const { pathname } = useRouter()
  const collapseItems = [
    { name: 'Blogs', link: '/blog' },
    { name: 'Books', link: '/books' },
    { name: 'Lectures', link: '/lectures' }
  ]

  return (
    <>
      <Navbar shouldHideOnScroll isCompact variant='floating'>
        <Navbar.Toggle showIn='sm' />
        <Navbar.Brand>
          <Link href='/'>
            <a className='flex items-center'>
              <Avatar
                bordered
                zoomed
                src='/images/logo.jpg'
                css={{ d: 'flex', '@sm': { d: 'none' } }}
                color='secondary'
              />
              <Text
                b
                css={{ ml: 5, fontSize: '0.8rem', '@xs': { fontSize: '1rem' } }}
                color='secondary'
              >
                ABDULLAH MAHMUD
              </Text>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='sm'
          variant='highlight'
        >
          {collapseItems.map(item => (
            <Link key={item.link} href={item.link}>
              <Navbar.Link isActive={pathname === item.link}>
                {item.name}
              </Navbar.Link>
            </Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@sm': {
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
                  icon={<AiFillSetting className='h-8 w-8 text-white' />}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu aria-label='User menu actions' color='secondary'>
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Link href='/blog'>
                  <a>Blogs</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key='profile2' css={{ height: '$18' }}>
                <Link href='/blog'>
                  <a>Books</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key='profile3' css={{ height: '$18' }}>
                <Link href='/blog'>
                  <a>Lectures</a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item.link}
              activeColor='secondary'
              isActive={pathname === item.link}
            >
              <Link href={item.link}>
                <a className=' min-w-full'>{item.name}</a>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

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
