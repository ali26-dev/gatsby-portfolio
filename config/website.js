const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Ali26 - Software Developer`, // Navigation and Site Title
  siteTitleAlt: `Ali26 - Full-Stack Software Developer, Designer, and Student`, // Alternative Site title for SEO
  siteTitleShort: `Ali-26`, // short_name for manifest
  siteHeadline: `Full-Stack Software Developer, Designer, and Student`, // Headline for schema.org JSONLD
  siteUrl: `https://tterb-gatsby.netlify.com`, // Domain of your site. No trailing slash!
  siteKeywords: [`ali26`, `full-stack`, `software`, `developer`, `design`, `portfolio`, `blog`, `python`, `javascript`, `react`, `gatsby`, `website optimization`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/logo.png`, // Used for SEO and manifest
  siteDescription: `Developer, Designer, Student`,
  author: {
    name: `Ali26`,
    bio: `Software developer, designer, and student with a passion for exploring new ideas, platforms, and web-technologies, while creating tools that myself and other enjoy.`,
    github: `https://github.com/ali26-dev`,
    dribbble: `https://dribbble.com`,
    twitter: `https://twitter.com/ali26_codes`,
    linkedIn: `https://www.linkedin.com/`,
  },
  disqusShortname: `tterb-gatsby`,
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: `@ali24_codes`, // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: `UA-82760104-1`, // Google Analytics ID
  googleOptimizeID: `GTM-P9NNBQ3`, // Google Optimize container ID
  // Manifest and Progress color
  themeColor: tailwind.colors.green,
  backgroundColor: tailwind.colors.blue,
}
