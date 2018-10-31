import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allHnStory {
      edges {
        node {
          id
          title
          score
          order
          domain
          url
        }
      }
    }
  }
`

export default (props) => <div><ol style={{ padding: '1em 2em'}}>
  {
    props.data.allHnStory.edges.map(story => <li><a style={{ color: 'inherit'}} href={story.node.url}>
      {story.node.title}
      <small style={{display: 'block'}}>{story.node.score} Point | {story.node.domain}</small>
    </a></li>)
  }
</ol></div>