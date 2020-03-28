import React from 'react';
import HeaderPage from '../components/HeaderPage';
import Carousel from '../components/Carousel';
import { Container, Row, Col } from 'react-grid-system';
import PostFooter from '../components/PostFooter';
import './editorialPost.scss';
import Link from '../components/Link';
import Button from '../components/Button';

const EditorialPost = ({ data, pageContext, location }) => {

  console.log('dentrooo', data)
  console.log('pageContext', pageContext)

  if (data) {

    const post = data.markdownRemark;
    const images = data.allFile.edges;
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext
    const { title, description, publishedBy, publishedByUrl } = post.frontmatter;

    return (
      <div className="content editorial-post">
        <HeaderPage title={title} subtitle={description} />
        <Container fluid>
          <Row>
            <Col lg={6} >
              <Carousel views={images} />
            </Col>
            <Col lg={6}>

              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div>
                <p>
                  <strong>Editorial: </strong>
                  <Link to={publishedByUrl} isExternal>
                    <Button right>
                      {publishedBy}
                    </Button>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <PostFooter previous={previous} next={next} />
      </div>
    )
  }

  return null;

}

export const pageQuery = graphql`
  query EditorialPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        publishedBy
        publishedByUrl
      }
    }

    allFile(
      filter: {
        relativePath: {regex: $slug},
        extension: {regex: "/((?=jpg)|(?=jpeg)|(?=png))/"}
      },
      sort: {fields: name}
    ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
`

export default EditorialPost;
