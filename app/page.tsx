import Image from 'next/image'
import Link from 'next/link'
import HeroImage from 'public/images/hero.jpeg'
import OgousImage from 'public/images/ogous.jpeg'
import clsx from 'clsx'

export default function HomePage() {
  const tags = ['web3', 'javascript', 'cloudcomputing', 'softwarearchitecture']
  const socials = [
    {
      link: 'mailto:hi@ogous.dev',
      slug: 'email'
    },
    {
      link: 'https://twitter.com/ogouschanali',
      slug: 'twitter'
    },
    {
      link: 'https://www.linkedin.com/in/oguzhanali/',
      slug: 'linkedin'
    },
    {
      link: 'https://github.com/ogous',
      slug: 'github'
    }
  ]
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        src={HeroImage}
        alt="web3 world"
        className="absolute inset-0 z-[-1] h-full w-full rounded-lg object-cover blur-md"
      />
      <div className="flex max-w-screen-xl flex-1 flex-col items-center justify-center">
        <Image
          src={OgousImage}
          alt="Ogous Chan Ali"
          width={200}
          className="z-10 -mb-4 rounded-full border-4 border-layer border-opacity-20 shadow-lg"
        />
        <div className="rounded-2xl border-4 border-layer border-opacity-20 bg-layer bg-opacity-10 p-4">
          <h1 className="mb-6 mt-8 bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-center font-lato text-6xl font-black leading-[70px] text-transparent">
            Ogous Chan Ali
          </h1>
          <p className="text-center font-poppins">
            Talks about
            <br />
            <br />
            {tags.map((tag) => (
              <span
                key={tag}
                className={
                  'mr-1 rounded-full bg-gradient-to-r from-tertiary via-primary to-secondary py-1 px-3 font-bold text-layer'
                }
              >
                #{tag}
              </span>
            ))}
            <br />
            <br />
            <span className="inline-block max-w-md">
              With over ten years experience as a software engineer, team
              leader, product owner in the tech industry, I am enthusiastically
              focused on building highly scalable applications and
              infrastructure solutions for my partners.
            </span>
          </p>
          <br></br>
          <ul className="flex items-center justify-center">
            {socials.map((i, idx) => (
              <li
                key={i.slug}
                className={clsx(
                  idx !== socials.length - 1 &&
                    'mr-2 after:ml-2 after:content-["|"]'
                )}
              >
                <Link href={i.link} target={'_blank'}>
                  {i.slug.charAt(0).toUpperCase() + i.slug.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
