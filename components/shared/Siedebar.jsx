import { Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Siedebar() {
  const { isDark, theme } = useTheme()
  return (
    <div
      className={`pt-16 border-r-4 ${
        isDark ? 'border-primary ' : 'border-black '
      } text-center hidden md:block overflow-hidden fixed h-full left-0 top-0 w-52 text-white`}
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
          </div>
        </div>
      </div>
    </div>
  )
}

const navdata = [
  { name: 'Blogs', link: '/blog' },
  { name: 'Books', link: '/blog/create' },
  { name: 'Lectures', link: '/lectures' }
]
