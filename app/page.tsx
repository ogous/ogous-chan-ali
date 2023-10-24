import Image from 'next/image'
import Link from 'next/link'
import HeroImage from 'public/images/hero.jpeg'
import OgousImage from 'public/images/ogous.jpeg'
import clsx from 'clsx'

export default function HomePage() {
  const tags = ['javascript', 'softwarearchitecture', 'cloudcomputing', 'web3']
  const socials = [
    {
      link: 'mailto:hi@ogous.dev',
      slug: 'email'
    },
    {
      link: 'https://cal.com/ogous',
      slug: 'cal'
    },
    {
      link: 'https://github.com/ogous',
      slug: 'github'
    },
    {
      link: 'https://www.linkedin.com/in/ogous/',
      slug: 'linkedin'
    },
    {
      link: 'https://ogous.medium.com/',
      slug: 'medium'
    },
    {
      link: 'https://www.producthunt.com/@ogous',
      slug: 'producthunt'
    },
    {
      link: 'https://twitter.com/ogouschanali',
      slug: 'twitter'
    }
    // {
    //   link: 'https://www.hackerrank.com/ogous',
    //   slug: 'hackerrank'
    // },
    // {
    //   link: 'https://app.codesignal.com/profile/ogous',
    //   slug: 'codesignal'
    // },
    // {
    //   link: 'https://stackoverflow.com/users/11144413/ogous-chan-ali',
    //   slug: 'stackoverflow'
    // },
    // {
    //   link: 'https://g.dev/ogous',
    //   slug: 'googledeveloper'
    // },
    // {
    //   link: 'https://www.upwork.com/freelancers/~01f06eb46718139e39',
    //   slug: 'upwork'
    // },
    // {
    //   link: 'https://superpeer.com/ogous',
    //   slug: 'superpeer'
    // }
  ]
  return (
    <div className="relative flex min-h-screen items-center justify-center pb-6">
      <Image
        src={HeroImage}
        alt="web3 world"
        className="absolute inset-0 z-[-1] h-full w-full rounded-lg object-cover blur-lg"
        loading="lazy"
      />
      <div className="flex max-w-screen-xl flex-1 flex-col items-center justify-center p-4">
        <Image
          src={OgousImage}
          alt="Ogous Chan Ali"
          width={200}
          loading="lazy"
          className="z-10 -mb-4 rounded-full border-4 border-layer border-opacity-20 shadow-lg"
        />
        <h1 className="mb-6 mt-8 bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-center font-lato text-6xl font-black leading-[70px] text-transparent">
          Ogous Chan Ali
        </h1>
        <div className="flex flex-col items-center justify-center text-center font-poppins">
          <span className="mb-8">Thinks about and hacks with:</span>

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

          <p className="inline-block max-w-[660px] text-center">
            I have strong technical experiences on providing highly scalable
            end-to-end software solutions ranging from cloud architecture to
            backend services and modern frontend development. I am
            enthusiastically focused on the Javascript/Typescript ecosystem, and
            I have expertises on React for web, React Native for mobile and
            Node.js for back-end. I have lately participated in the world of
            web3, providing solutions about bridging web2 & web3.
            <br />
            <br />
            With the last 5 years of managerial experiences, I am a &apos;wild
            card&apos; to build and boost startups and a technology leader for
            growing operations.
          </p>
        </div>
        <br></br>
        <ul className="bottom-0 left-0 mx-auto flex w-full flex-wrap items-center justify-center px-4 pb-4 md:absolute">
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
  )
}
