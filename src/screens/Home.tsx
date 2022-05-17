import React, { Suspense, useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { OperationType } from "relay-runtime";

const HomeQuery = graphql`
  query HomeQuery {
    dummy
  }
`;

export default function Home(): JSX.Element {
  const [queryReference, loadQuery] = useQueryLoader(HomeQuery);
  useEffect(() => loadQuery({}), [loadQuery]);
  return queryReference ? (
    <Suspense fallback={<ActivityIndicator />}>
      <HomeContent queryReference={queryReference} />
    </Suspense>
  ) : (
    <ActivityIndicator />
  );
}

function HomeContent({
  queryReference,
}: {
  queryReference: PreloadedQuery<OperationType, Record<string, unknown>>;
}): JSX.Element {
  const data = usePreloadedQuery(HomeQuery, queryReference);
  return <Text>{JSON.stringify(data)}</Text>;
}
