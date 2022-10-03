import { Navbar, Text, Avatar, Dropdown, Switch } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'
import { VscColorMode } from 'react-icons/vsc'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { useAppContext } from 'utils/context'

export default function Nav() {
  const { pathname } = useRouter()
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  const collapseItems = [
    { name: 'Blogs', link: '/blog' },
    { name: 'Books', link: '/blog/create' },
    { name: 'Lectures', link: '/lectures' }
  ]
  const [size, setSize] = useAppContext()

  return (
    <div className=' max-w-5xl mx-auto'>
      <Navbar
        shouldHideOnScroll
        isBordered={isDark}
        isCompact
        variant='floating'
      >
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
              <Navbar.Link isActive={pathname.includes(item.link)}>
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
          <Dropdown isBordered placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='secondary'
                  size='md'
                  icon={<AiFillSetting className='h-8 w-8 text-[#fff]' />}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu aria-label='User menu actions' color='secondary'>
              <Dropdown.Item
                icon={<VscColorMode className='w-8 h-8 text-primary' />}
                command={
                  <Switch
                    size='lg'
                    color='secondary'
                    bordered
                    shadow
                    iconOn={<BsFillMoonStarsFill />}
                    iconOff={
                      <span className=' bg-[yellow] rounded-full p-1'>
                        <BsSunFill />
                      </span>
                    }
                    checked={isDark}
                    onChange={e =>
                      setTheme(e.target.checked ? 'dark' : 'light')
                    }
                  />
                }
                description={`Current is ${type}`}
                key='color'
                css={{
                  height: '$18'
                }}
              >
                Theme
              </Dropdown.Item>
              <Dropdown.Item
                icon={<VscColorMode className='w-8 h-8 text-primary' />}
                description={
                  <div className='flex items-center justify-between'>
                    <button
                      onClick={() => setSize(prev => prev + 2)}
                      className='text-lg bg-primary text-white rounded-full px-2 mx-1'
                    >
                      +
                    </button>
                    <span className='text-primary font-bold text-lg px-2'>
                      {size / 10}
                    </span>
                    <button
                      onClick={() => {
                        if (size > 10) {
                          setSize(prev => prev - 2)
                        }
                      }}
                      className='text-lg bg-primary text-white rounded-full px-[10px] mx-1'
                    >
                      -
                    </button>
                  </div>
                }
                key='fontsize'
                css={{ height: '$18' }}
              >
                Font Size
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
              isActive={pathname.includes(item.link)}
            >
              <Link href={item.link}>
                <a className=' min-w-full'>{item.name}</a>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
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
