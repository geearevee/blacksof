import React, { ReactNode } from 'react'
import logo from 'assets/globals/logo.svg'
import { TextAnchor } from 'atoms/links'

export default function Footer() {
  return (
    <footer className="bg-green  bg-[url('./assets/footer/front.png')] bg-no-repeat bg-top bg-cover 2xl:pt-10">
      <section className="w-container-sm  blade-top-padding-sm lg:blade-top-padding ">
        <div className="2xl:w-11/12 mx-auto flex md:flex-row flex-col gap-y-10">
          <div className="flex-1">
            <div className="grid place-content-start">
              <img src={logo} alt="Bharatrohan" className="xl:h-32 h-24" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-y-6 md:gap-6 lg:gap-10 xl:gap-20">
            <div>
              <h6 className="text-yellow font-medium pb-3 md:pb-4">About us</h6>
              <ul className="grid gap-1 lg:gap-3 font-light">
                <li>
                  <TextAnchor
                    href="/coming-soon"
                    text="Our company"
                    color="light"
                  />
                </li>
                <li>
                  <TextAnchor href="/contact" text="Contact us" color="light" />
                </li>
                <li>
                  <TextAnchor href="/careers" text="Careers" color="light" />
                </li>
                <li>
                  <TextAnchor
                    href="/coming-soon"
                    text="Investor relations"
                    color="light"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-yellow font-medium pb-3 md:pb-4">
                Resources
              </h6>
              <ul className="grid gap-1 lg:gap-3 font-light">
                <li>
                  <TextAnchor
                    href="/blogs-and-updates"
                    text="Blogs and updates"
                    color="light"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-yellow font-medium pb-3 md:pb-4">
                For organisations
              </h6>
              <ul className="grid gap-1 lg:gap-3 font-light">
                <li>
                  <TextAnchor
                    withRegSymbol
                    href="/coming-soon"
                    text="SeedAssure"
                    color="light"
                  />
                </li>
                <li>
                  <TextAnchor
                    withRegSymbol
                    href="/coming-soon"
                    text="SourceAssure"
                    color="light"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-yellow font-medium pb-3 md:pb-4">
                For farmers
              </h6>
              <ul className="grid gap-1 lg:gap-3 font-light">
                <li>
                  <TextAnchor
                    withRegSymbol
                    href="/coming-soon"
                    text="CropAssure"
                    color="light"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-container-sm lg:pt-10 blade-top-margin-lg blade-bottom-padding-sm   2xl:blade-bottom-padding">
        <div className="2xl:w-11/12 mx-auto  px-1  flex md:flex-row flex-col  gap-y-5 pt-10 border-t-1 border-white border-solid  border-opacity-40">
          <div className="flex items-center gap-3 flex-1 pr-10">
            <SocialProfile
              href={process.env.REACT_APP_LINKEDIN ?? 'https://bharatrohan.com'}
            >
              <svg
                width={26}
                height={26}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </SocialProfile>
            <SocialProfile
              href={process.env.REACT_APP_INSTA ?? 'https://bharatrohan.com'}
            >
              <svg
                width={26}
                height={26}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </SocialProfile>
            <SocialProfile
              href={process.env.REACT_APP_FB ?? 'https://bharatrohan.com'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={26}
                height={26}
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </SocialProfile>
          </div>
          <div className="flex gap-2 md:gap-3 xl:gap-4 md:flex-row flex-col">
            <TextAnchor
              text="Terms and conditions"
              href="/coming-soon"
              color="light"
            />
            <TextAnchor
              text="Privacy policy"
              href="/coming-soon"
              color="light"
            />
            <div>
              <span className="text-white text-[12px] md:text-base  text-opacity-70">
                &copy;2023 BharatRohan. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

function SocialProfile({
  href,
  children,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      rel="noopener"
      className="stroke-white outline-none fill-white hover:fill-yellow focus-visible:fill-yellow hover:stroke-yellow focus-visible:stroke-yellow p-1"
    >
      {children}
    </a>
  )
}
