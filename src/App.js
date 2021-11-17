import logo from "./logo.svg";
import "./App.css";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
    concat,
} from "@apollo/client";
import { Home } from "./pages/Home";
import { RestLink } from "apollo-link-rest";

function App() {
    // const restLink = new RestLink({
    //     endpoints: {
    //         subGraphs: {
    //             uri: "https://api.thegraph.com/subgraphs/name/ace-contributor/ideapad",
    //             responseTransformer: async (response) => response.data,
    //         },
    //         countries: {
    //             uri: "https://countries.trevorblades.com",
    //             responseTransformer: async (response) => response.data,
    //         },
    //         // weather: {
    //         //     uri: "https://graphql-weather-api.herokuapp.com/",
    //         // },
    //     },
    // });
    const subGraphLink = new HttpLink({
        uri: "https://api.thegraph.com/subgraphs/name/ace-contributor/ideapad",
    });
    const weatherLink = new HttpLink({
        uri: "https://graphql-weather-api.herokuapp.com/",
        useGETForQueries: true,
    });

    const countryLink = new HttpLink({
        uri: "https://countries.trevorblades.com/",
    });

    const pokemonLink = new HttpLink({
        uri: "https://graphqlpokemon.favware.tech/",
        useGETForQueries: true,
    });

    const client = new ApolloClient({
        link: ApolloLink.split(
            (operation) => operation.getContext().clientName === "graph",
            subGraphLink,
            ApolloLink.split(
                (operation) => operation.getContext().clientName === "country",
                countryLink,
                ApolloLink.split(
                    (operation) =>
                        operation.getContext().clientName === "weather",
                    weatherLink,
                    pokemonLink
                )
            )
        ),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>
    );
}

export default App;
