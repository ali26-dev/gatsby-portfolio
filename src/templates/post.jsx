import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import assignIn from 'lodash/assignIn'
import MDXRenderer from '../components/Post/MDX'
// Config
import config from '../../config/website'
// Components
import PostLayout from '../components/PostLayout'
import PostMeta from '../components/PostMeta'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'

