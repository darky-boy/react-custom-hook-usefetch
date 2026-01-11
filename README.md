# React Custom Hook – useFetch

## Overview

In this project, I created a custom React hook called `useFetch` to simplify
data fetching from an API. The main idea was to avoid repeating fetch logic
inside components and make the code more reusable and clean.

## Why Custom Hook?

Fetching data usually requires handling loading states, errors, and side effects.
By moving this logic into a custom hook, the component code becomes simpler
and easier to understand.

## Hook Design

The `useFetch` hook:
- Accepts a URL as a parameter
- Uses `useState` to manage data, loading, and error states
- Uses `useEffect` to trigger API calls
- Uses `useCallback` to memoize the fetch function
- Returns `data`, `loading`, and `error`

## Component Usage

A `Products` component uses the `useFetch` hook to fetch product data from
a dummy API. While the data is loading, a loading message is shown. If an error
occurs, an error message is displayed. Once data is fetched, it is rendered
in a grid layout.

## Conclusion

This approach makes the code more modular, reusable, and easier to maintain.
The custom hook can be reused with different APIs without changing the
component logic.
