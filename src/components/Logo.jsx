import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Config
import config from '../../config/website'
// Components
import PageLink from './PageLink'

const Wrapper = styled.span`
  ${tw`ml-6 z-10`}
  svg {
    ${tw`max-w-full h-auto m-0 z-999`}
    left: 2.5rem;
    box-sizing: border-box;
    @media (max-width: 500px) {
      left: 1.5rem;
    }
  }
  &:hover .logo-title {
    ${tw`opacity-100`}
  }
`

const Title = styled.span`
  ${tw`relative cursor-default opacity-0 z-10`}
  color: rgba(255,255,255,0.9);
  font-size: 1.4rem;
  top: -0.125rem;
  left: 2.25rem;
  transition: opacity 350ms ease-in-out;
`

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.bPath = React.createRef()
    this.sPath = React.createRef()
    this.pathAnim = React.createRef()
  }

  componentDidMount() {
    const bPath = this.bPath
    const pathAnim = this.pathAnim
    const trackLength = bPath.getTotalLength().toString()
    bPath.setAttribute('stroke-dasharray', `${trackLength},${trackLength}`)
    pathAnim.setAttribute('values', `-${trackLength};0`)
  }

  render() {
    const { className, link, children } = this.props
    const siteTitle = config.siteTitleShort
    return (
      <Wrapper className={className}>
        <PageLink direction='down' label={siteTitle} to={link}>
          <svg className='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 121.92 188.66'>
            <title>Logo</title>
            <path
              ref={(ref) => { this.sPath = ref }}
              id='sPath' className='sPath'
              d='m 233.91333,201.90476 c -5.69976,-18.25286 -47.19444,-30.20159 -50.46119,31.26786 -1.5119,28.44905 7.52833,53.50596 30.88875,58.40536 16.05801,3.36785 26.92462,-12.53291 28.99173,-29.56536 0.69544,-27.10807 -26.50166,-22.82666 -26.50166,-22.82666 0,0 -25.33535,7.25204 -24.14453,24.36404'
              transform='translate(-99.22 -146.28)' />
            <path
              ref={(ref) => { this.bPath = ref }}
              id='bPath' className='bPath' d='m 181.17773,230.24347 c 0.84334,-16.89178 6.03161,-31.53069 26.98242,-31.22631 14.70831,0.21369 23.29013,12.2224 23.55792,33.26329 -1.93938,31.69262 -35.60645,29.47836 -42.53218,38.54748 -3.50379,4.12689 -7.21416,18.92282 4.32989,26.95124 0,0 48.51337,0.28504 44.72394,-6.26337'
              transform='translate(-178.22 -146.28)'>
              <animate
                ref={(ref) => { this.pathAnim = ref }}
                id='dashAnim' attributeName='stroke-dashoffset'
                from='0' to='0' dur='2.5s' begin='0'
                fill='freeze' keySplines='1 1 0.5 1.15'
                calcMode='spline' />
            </path>
            <filter id='dropshadow' height='150%' x='-25%' width='180%'>
              <feGaussianBlur in='SourceAlpha' stdDeviation='4' />
              <feOffset dx='-0.5' dy='1.5' result='offsetblur' />
              <feComponentTransfer>
                <feFuncA type='linear' slope='0.5' />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode /><feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </svg>
          {children}
        </PageLink>
        <Title className='logo-title'>{siteTitle}</Title>
      </Wrapper>
    )
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Logo
