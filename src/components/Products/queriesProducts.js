import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
query{
    category(input: { title: "all" }) {
      name
      products {
         id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_CLOTHES_PRODUCTS = gql`
query{
    category(input: { title: "clothes" }) {
      name
      products {
         id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_TECH_PRODUCTS = gql`
query{
    category(input: { title: "tech" }) {
      name
      products {
         id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;