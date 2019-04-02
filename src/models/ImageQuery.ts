import { FixedObject, FluidObject } from 'gatsby-image'

export interface ImageQuery {
  allFile: {
    edges: {
      node: {
        name: string
        childImageSharp: {
          fixed: FixedObject
          fluid: FluidObject & {
            presentationWidth: number
            presentationHeight: number
          }
        }
      }
    }[]
  }
}
