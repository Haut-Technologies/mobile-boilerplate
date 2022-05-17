import React from "react";
import { LogBox } from "react-native";
import { RelayEnvironmentProvider } from "react-relay";
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import Navigation from "screens/navigation/Root";

export default function App(): JSX.Element {
  // Due to the Android yellow box warnings for long set timers
  LogBox.ignoreLogs(["Setting a timer"]);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Navigation />
    </RelayEnvironmentProvider>
  );
}

const environment = buildEnvironment();

const backEndURLBase = "http://172.30.1.48:3030"; // Change this to address of server if using a real device

function buildEnvironment(): Environment {
  const fetchQuery: FetchFunction = (operation, variables) => {
    return fetch(`${backEndURLBase}/api`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
  };

  // Create a network layer from the fetch function
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource());

  return new Environment({
    network,
    store,
  });
}
