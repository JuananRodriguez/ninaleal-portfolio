import React, { useState, useCallback } from 'react';
import Carousel, { ModalGateway, Modal } from '../components/Carousel';
import GalleryImage from '../components/GalleryImage';
import Gallery from '../components/Gallery'; import { graphql, useStaticQuery } from "gatsby"

// import Bio from "../components/bio"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title
//   const posts = data.allMarkdownRemark.edges

//   //<Layout location={location} title={siteTitle}>
//   return (
//     <>
//     <h1>whtas</h1>
//       <SEO title="All posts" />
//       <Bio />
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug
//         return (
//           <article key={node.fields.slug}>
//             <header>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//             </header>
//             <section>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: node.frontmatter.description || node.excerpt,
//                 }}
//               />
//             </section>
//           </article>
//         )
//       })}
//     </>
//   )
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `


export default () => {
  const [currentImage, setCurrentImage] = useState(null);

  const images = useCallback(useStaticQuery(graphql`
  query {
      allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
          edges {
              node {
                      publicURL
                      name
                      id
                      childImageSharp  {
                          fluid  {
                            ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
          
      }
  `).allFile.edges.map(o => o).filter(image => image.node.childImageSharp), [])

  return (
    <>
      <Gallery>
        {
          images && images.map((image, index) =>
            <GalleryImage
              key={image.node.id}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.name}
              onClick={() => setCurrentImage(index)}
            />
          )
        }
      </Gallery>

      <ModalGateway>
        {currentImage !== null ? (
          <Modal onClose={() => setCurrentImage(null)}>
            <Carousel
              views={images}
              currentIndex={currentImage}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}