import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// Components
import Layout from '../components/Layout'
import Header from '../components/Header'
import PageLink from '../components/PageLink'
// Elements
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { Divider } from '../elements/Dividers'
import { BigTitle } from '../elements/Titles'
// Views
import Footer from '../views/Footer'


const Thanks = styled.ul`
  ${tw`list-reset`}
`

const ThankyouPage = () => {
  require('../styles/tags.scss')
  return (
    <Layout pages={1}>
      <Header offset={0} factor={0.4}>
        <BigTitle>Sent<span className='accent'>.</span></BigTitle>
      </Header>
      <Divider
        bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
        clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)'
        speed={0.2}
        offset={0.15}
        factor={1.25}
      />
      <Content offset={0} factor={1.05} speed={0.25} className='tags-content pt-0'>
        <Inner>
          <div><h1>Thank you for contacting me :)</h1> <span>I'll reach to you as soon as I get back online, till then read my blogs</span></div>
          <div className='back-blog-btn'>
            <PageLink direction='right' to='/blog' className='back-blog btn'>Go to Blogs</PageLink>
          </div>
        </Inner>
      </Content>
      <Footer offset={1.5} factor={0.5} />
    </Layout>
  )
}

ThankyouPage.propTypes = {
  data: PropTypes.shape.isRequired,
  pageContext: PropTypes.shape.isRequired,
}

export default ThankyouPage
