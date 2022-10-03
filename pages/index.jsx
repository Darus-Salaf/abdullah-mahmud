import Head from 'next/head'
import { useTheme } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  const { isDark } = useTheme()

  return (
    <div>
      <Head>
        <title>Abdullah Mahmud</title>
        <meta
          name='description'
          content='Official website of Sheikh Abdullah Mahmud'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=' max-w-3xl mx-auto px-5'>
        <div className='text-center mt-12'>
          <div className='flex justify-center'>
            <div className=' border-8 w-[200px] overflow-hidden h-[200px] border-[#efefef] rounded-full'>
              <Image
                src='/images/logo.jpg'
                height='200px'
                width='200px'
                alt='logo'
              />
            </div>
          </div>
          <div
            style={{ color: !isDark && 'white' }}
            className='bg-primary text-lg px-8 pb-8 pt-24 -mt-20 text-justify rounded-lg'
          >
            বহুগ্রন্থপ্রণেতা আব্দুল্লাহ মাহমূদ একজন তরুণ ইসলামি গবেষক, আলোচক ও
            লেখক। দেশীয় বিভিন্ন শিক্ষাপ্রতিষ্ঠানের পাশাপাশি তিনি জামি&apos;আ
            সালাফিয়্যাহ বানারাস থেকে পড়াশোনা করেছেন। গবেষণা ও লেখালেখির পাশাপাশি
            বর্তমানে তিনি ঢাকাস্থ &quot;মাদ্রাসাতুল হাদীস&quot; এ শিক্ষকতা
            করছেন। তার আলোচনা ও লেখাগুলো সাধারণত অনেক ইলমসমৃদ্ধ হয়ে থাকে এবং
            বাতিল চিন্তাধারার অপনোদনে তার জবাবগুলো খুবই জনপ্রিয়।
          </div>
        </div>
      </main>
    </div>
  )
}
