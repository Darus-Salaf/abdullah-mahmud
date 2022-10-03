import { Avatar, Popover, Switch, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { VscColorMode } from 'react-icons/vsc'
import { useTheme as useNextTheme } from 'next-themes'
import { useAppContext } from 'utils/context'
import { useState } from 'react'

export default function Siedebar() {
  const [open, setOpen] = useState(false)
  const { setTheme } = useNextTheme()
  const { isDark, type, theme } = useTheme()
  const [size, setSize] = useAppContext()
  return (
    <div
      className={`pt-16 border-r-4 ${
        isDark ? 'border-primary ' : 'border-[#531492] '
      } text-center hidden md:block overflow-auto fixed h-full left-0 top-0 w-52 text-white`}
      style={{
        backgroundColor: isDark
          ? theme.colors.black.value
          : theme.colors.secondary.value
      }}
    >
      <div className='px-5'>
        <div
          className={`border-[#6321a6] rounded-full shadow-2xl ${
            isDark ? 'shadow-[#eadcf86e]' : 'shadow-[#0000007c]'
          }  border-8`}
        >
          <div className='rounded-full overflow-hidden border-4 border-[white]'>
            <Link href='/' passHref>
              <Image
                src='/images/logo.jpg'
                alt='logo'
                width='95%'
                height='95%'
                layout='responsive'
              />
            </Link>
          </div>
        </div>
        <div className='mt-3'>
          <Text size='$2xl' color={isDark ? 'secondary' : 'white'} b>
            ABDULLAH MAHMUD
          </Text>
          <p className='text-sm mt-2'>তরুণ ইসলামি গবেষক, লেখক, আলোচক</p>
          <div className='mt-5'>
            {navdata.map((item, key) => (
              <div
                key={key}
                className={`text-xl ${
                  isDark
                    ? 'border-primary hover:text-primary'
                    : 'border-[white] hover:text-[white]'
                } border-t-2 ${
                  key === navdata.length - 1 && 'border-b-2'
                } py-2`}
              >
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
            <Popover
              isOpen={open}
              onOpenChange={setOpen}
              isBordered
              placement='top-right'
            >
              <Popover.Trigger>
                <div className='flex justify-center mt-2'>
                  <Avatar
                    bordered
                    as='button'
                    color='secondary'
                    size='md'
                    icon={<AiFillSetting className='h-8 w-8 text-[#fff]' />}
                  />
                </div>
              </Popover.Trigger>
              <Popover.Content aria-label='User menu actions' color='secondary'>
                <div className='p-4'>
                  <div className='flex gap-x-6 mb-3 hover:bg-lite hover:text-black p-2 rounded-xl items-center justify-between'>
                    <div className='flex items-center'>
                      <VscColorMode className='w-8 h-8 text-primary' />
                      <div className='ml-2'>
                        <p className='font-semibold'>Theme</p>
                        <p className='text-sm -mt-2'>Current is {type}</p>
                      </div>
                    </div>
                    <Switch
                      size='lg'
                      color='secondary'
                      bordered
                      shadow
                      iconOn={<BsFillMoonStarsFill className='text-[white]' />}
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
                  </div>
                  <div className='flex gap-x-6 mb-3 hover:bg-lite hover:text-black p-2 rounded-xl items-center justify-between'>
                    <div className='flex items-center'>
                      <VscColorMode className='w-8 h-8 text-primary' />
                      <div className='ml-2'>
                        <p className='font-semibold'>Font Size</p>
                        <p className='text-sm -mt-2'>Current is {size}</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <button
                        onClick={() => setSize(prev => prev + 2)}
                        className='text-lg bg-primary text-white rounded-l-full px-3 border-r-2'
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          if (size > 8) {
                            setSize(prev => prev - 2)
                          }
                        }}
                        className='text-lg bg-primary font-semibold text-white rounded-r-full px-[15px]'
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Content>
            </Popover>
          </div>
          <p>
            Made with 💖 by{' '}
            <a className=' underline' href='https://fb.com/rabibinsalam'>
              dev
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

const navdata = [
  { name: 'Blogs', link: '/blog' },
  { name: 'Books', link: '/blog/Create' },
  { name: 'Lectures', link: '/lectures' }
]
