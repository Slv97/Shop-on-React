import { gql } from "@apollo/client";

export const GET_ABOUT_PRODUCT = gql`
query($id: String!) {
    product(id: $id) {
      inStock
      name
      brand
      description
      category
      gallery
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
    }
  }
`;