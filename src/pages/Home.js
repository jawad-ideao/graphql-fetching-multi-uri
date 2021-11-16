import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
    GET_POOLS,
    GET_WEATHER_QUERY,
    GET_COUNTRIES,
    GET_POKEMON_DETAILS,
} from "../graphql/Queries";

export const Home = () => {
    // const [citySearched, setCitySearched] = useState("");
    // const [getWeather, { loading, data, error }] = useLazyQuery(
    //     GET_WEATHER_QUERY,
    //     {
    //         variables: { name: citySearched },
    //     }
    // );
    const weather = useQuery(GET_WEATHER_QUERY, {
        variables: { name: "Rome" },
        context: {
            clientName: "weather",
        },
    });
    weather.data && console.log("Weather Data", weather.data);

    const graph = useQuery(GET_POOLS, {
        context: { clientName: "graph" },
    });
    graph.data && console.log("Graph Data", graph.data);

    const country = useQuery(GET_COUNTRIES, {
        context: { clientName: "country" },
    });
    country.data && console.log("Country Data", country.data);

    const pokemon = useQuery(GET_POKEMON_DETAILS);
    pokemon.data && console.log("Pokemon Data", pokemon.data);

    // if (error) {
    //     console.log("Error", error);
    // }
    // if (data) {
    //     console.log("Data", data);
    // }
    return (
        <div>
            <h1>Testing</h1>
            {/* <input
                type="text"
                placeholder="City Name"
                onChange={(e) => setCitySearched(e.target.value)}
            />
            <button onClick={() => getWeather()}>Search</button> */}
        </div>
    );
};
