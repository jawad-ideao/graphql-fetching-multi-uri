import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
    query getCityByName($name: String!) {
        getCityByName(name: $name) {
            name
            country
            weather {
                summary {
                    title
                }
                temperature {
                    actual
                }
                wind {
                    speed
                }
            }
        }
    }
`;

export const GET_POOLS = gql`
    query {
        pools(first: 10) {
            id
            address
            creator
            token
            weiToken
            meta
            totalMembers
            poolState
            tokenTarget
            totalOwed
            weiRaised
            poolType
            ratio
        }
    }
`;

export const GET_COUNTRIES = gql`
    query {
        country(code: "BR") {
            name
            native
            capital
            emoji
            currency
            languages {
                code
                name
            }
        }
    }
`;

export const GET_POKEMON_DETAILS = gql`
    query {
        getPokemon(pokemon: dragonite) {
            sprite
            num
            species
            color
        }
    }
`;

// @rest(type: "Status", path: "/")
