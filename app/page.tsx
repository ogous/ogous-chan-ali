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
    },
    {
      link: 'https://www.hackerrank.com/oguzxan_ali',
      slug: 'hackerrank'
    },
    {
      link: 'https://app.codesignal.com/profile/ogouschanali',
      slug: 'codesignal'
    },
    {
      link: 'https://stackoverflow.com/users/11144413/ogous-chan-ali',
      slug: 'stackoverflow'
    },
    {
      link: 'https://g.dev/ogous',
      slug: 'googledeveloper'
    },
    {
      link: 'https://www.upwork.com/freelancers/~01f06eb46718139e39',
      slug: 'upwork'
    }
  ]
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        src={HeroImage}
        alt="web3 world"
        className="absolute inset-0 z-[-1] h-full w-full rounded-lg object-cover blur-md"
        loading="lazy"
      />
      <div className="flex max-w-screen-xl flex-1 flex-col items-center justify-center">
        <Image
          src={OgousImage}
          alt="Ogous Chan Ali"
          width={200}
          loading="lazy"
          className="z-10 -mb-4 rounded-full border-4 border-layer border-opacity-20 shadow-lg"
        />
        <div className="rounded-2xl border-4 border-layer border-opacity-20 bg-layer bg-opacity-10 p-4">
          <h1 className="mb-6 mt-8 bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-center font-lato text-6xl font-black leading-[70px] text-transparent">
            Ogous Chan Ali
          </h1>
          <div className="flex flex-col items-center justify-center text-center font-poppins">
            <span className="mb-8">Talks about</span>

            <p className="mb-6 flex flex-col md:flex-row">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={
                    'mb-1 rounded-full bg-gradient-to-r from-tertiary via-primary to-secondary py-1 px-3 font-bold text-layer md:mr-1'
                  }
                >
                  #{tag}
                </span>
              ))}
            </p>

            <p className="inline-block max-w-md text-center">
              With over ten years experience as a software engineer, team
              leader, product owner in the tech industry, I am enthusiastically
              focused on building highly scalable applications and
              infrastructure solutions for my partners.
            </p>
          </div>
          <br></br>
          <ul className="flex flex-wrap items-center justify-center">
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
