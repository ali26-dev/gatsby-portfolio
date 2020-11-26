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
