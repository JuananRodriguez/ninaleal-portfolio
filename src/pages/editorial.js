import React from "react"
import EditorialEntry from './../components/EditorialEntry';
import HeaderPage from './../components/HeaderPage';
import { graphql } from "gatsby"

const EditorialIndex = ({ data }) => {
	const content = data.allMarkdownRemark.edges;
	return (
		<div className="content">
			<HeaderPage
				title="Editorial"
				subtitle="Una muestra de alguno de mis trabajos para libros, revistas y otros medios"
			/>
			<div className="editoral-content">
				{
					content.map(({ node }, index) => {
						return (
							<EditorialEntry
								node={node}
								key={index}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default EditorialIndex

export const pageQuery = graphql`
  query Editorial {
    site {
      siteMetadata {
		title
      }
    }
	allMarkdownRemark(
		sort: {order: ASC, fields: [frontmatter___date]}, 
		filter: {fileAbsolutePath: { regex: "/editorial/" }}
		) {
		edges {
			node {
				excerpt
				fields {
					slug
				}
				frontmatter {
					title
					description
					date
					thumbnail {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
  }
`