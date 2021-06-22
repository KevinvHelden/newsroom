import type { FunctionComponent, ReactElement } from "react";
import React from "react";
import { ArticlesProvider } from "./articlesContainer";

const Providers = [
  // each provider has access to the subsequent ones
  ArticlesProvider.Provider,
] as FunctionComponent[];

export const MainProvider: FunctionComponent = ({ children }) =>
  Providers.reduce(
    (A, Provider) => <Provider>{A}</Provider>,
    children
  ) as ReactElement;
