import React from 'react'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Parallax } from 'react-spring/renderprops-addons'
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


const TagList = styled.ul`
  ${tw `list-reset text-center text-lg`}
  li {
    display: inline-block;
    color: rgba(255,255,255,0.75);
    border: 2px solid rgba(255,255,255,0.75);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: color 300ms ease-in-out, background 350ms ease-in-out;
    margin: 0 0.5rem 0.5rem 0;
    padding: 4px 8px;
    a {
      color: rgba(255,255,255,0.75);
      &:hover {
        color: rgba(255,255,255,0.9);
      }
    }
    &:hover {
      background: rgba(255,255,255,0.85);
      border: 2px solid rgba(255,255,255,0.85);
      box-shadow: 0 1px 5px rgba(0,0,0,0.4);
      a {
        color: SlateBlue;
      }
    }
  }
`

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  require('../styles/tags.scss')
  return (
    <Layout pages={1.3}>
      <Header offset={0} factor={0.4}>
        <BigTitle>Tags<span className='accent'>.</span></BigTitle>
      </Header>
      <Divider
        bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
        clipPath='polygon(0 16%, 100% 4%, 100% 82%, 0 94%)'
        speed={0.2}
        offset={0.2}
        factor={1.3}
      />
      <Content speed={0.25} offset={0.2} factor={0.8} className='tags-content pt-0'>
        <Inner>
          <TagList className='tags-list'>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <PageLink to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </PageLink>
              </li>
            ))}
          </TagList>
        </Inner>
      </Content>
    </Layout>
  )
}

export default TagsPage

export const tagQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 50) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
