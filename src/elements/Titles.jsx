import styled from 'styled-components'
import tw from 'tailwind.macro'

export const BigTitle = styled.h1`
  ${tw`font-title font-bold tracking-wide leading-tighter w-full sm:text-9xl md:text-8xl mt-4 mb-6 ml-0`}
  color: rgba(255,255,255,0.95);
  font-size: 3em;
  letter-spacing: 0.025em;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const Title = styled.h1`
  ${tw`relative inline-block text-5xl font-title font-bold tracking-normal my-6 ml-0 lg:text-5xl md:ml-3`}
  color: rgba(255,255,255,0.9);
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 200ms ease-in-out;
  @media (min-width: 650px) {
    margin-left: 2.5rem;
  }
`

export const Subtitle = styled.p`
  ${tw`text-grey text-2xl sm:mt-2 lg:text-3xl font-sans text-white lg:mt-8 ml-2 xl:w-3/4`}
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`
