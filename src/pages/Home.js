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

    const {
        data: graphData,
        error: graphError,
        loading: graphLoading,
    } = useQuery(GET_POOLS, {
        context: { clientName: "graph" },
    });

    // To Fetch Data Once
    React.useEffect(() => {
        const onCompleted = (graphData) => {
            console.log("Graph Data", graphData);
        };
        const onError = (error) => {
            console.log("Graph Error", error);
        };
        if (onCompleted || onError) {
            if (onCompleted && !graphLoading && !graphError) {
                onCompleted(graphData);
            } else if (onError && !graphLoading && graphError) {
                onError(graphError);
            }
        }
    }, [graphLoading, graphData, graphError]);

    const {
        data: weatherData,
        error: weatherError,
        loading: weatherLoading,
    } = useQuery(GET_WEATHER_QUERY, {
        variables: { name: "Rome" },
        context: {
            clientName: "weather",
        },
    });

    // To Fetch Data Once
    React.useEffect(() => {
        const onCompleted = (data) => {
            console.log("Weather Data", data);
        };
        const onError = (error) => {
            console.log("Weather Error", error);
        };
        if (onCompleted || onError) {
            if (onCompleted && !weatherLoading && !weatherError) {
                onCompleted(weatherData);
            } else if (onError && !weatherLoading && weatherError) {
                onError(weatherError);
            }
        }
    }, [weatherLoading, weatherData, weatherError]);

    const {
        data: countryData,
        error: countryError,
        loading: countryLoading,
    } = useQuery(GET_COUNTRIES, {
        context: { clientName: "country" },
    });

    // To Fetch Data Once
    React.useEffect(() => {
        const onCompleted = (data) => {
            console.log("Country Data", data);
        };
        const onError = (error) => {
            console.log("Country Error", error);
        };
        if (onCompleted || onError) {
            if (onCompleted && !countryLoading && !countryError) {
                onCompleted(countryData);
            } else if (onError && !countryLoading && countryError) {
                onError(countryError);
            }
        }
    }, [countryLoading, countryData, countryError]);

    const {
        data: pokemonData,
        error: pokemonError,
        loading: pokemonLoading,
    } = useQuery(GET_POKEMON_DETAILS);

    // To Fetch Data Once
    React.useEffect(() => {
        const onCompleted = (data) => {
            console.log("Pokemon Data", data);
        };
        const onError = (error) => {
            console.log("Pokemon Error", error);
        };
        if (onCompleted || onError) {
            if (onCompleted && !pokemonLoading && !pokemonError) {
                onCompleted(pokemonData);
            } else if (onError && !pokemonLoading && pokemonError) {
                onError(pokemonError);
            }
        }
    }, [pokemonLoading, pokemonData, pokemonError]);

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
