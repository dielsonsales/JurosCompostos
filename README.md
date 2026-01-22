# Juros Compostos (Compound Interest Calculator)

A web application built with **Next.js** and **React** to simulate capital evolution over time with monthly contributions and recurring interest rates. This project serves as a hands-on laboratory for practicing React concepts such as state management and component architecture. It uses NextJS as a base because that's what I was starting to use, but I decided to just export it statically and have the whole page be dynamically rendered with `"use client"`.

## Learning Objectives

This project was built to learn the following React and Web concepts:

* **Controlled Components**: Managing input states where React is the "single source of truth" for the UI.
* **Unidirectional Data Flow**: Calculating complex financial results in the parent component and drilling data down to specialized display components like `Result` and `Inputs`.
* **TypeScript Integration**: Using Enums and Interfaces to ensure type safety.
* **React Compiler**: Leveraging the new React Compiler for automatic memoization of calculation logic.

## Getting Started

This project uses a `Makefile` to simplify common development tasks. Ensure you have `pnpm` installed before proceeding.

1. **Install dependencies**:
```bash
pnpm install

```


2. **Run the development server**:
```bash
make dev

```


3. **Build for production**:
```bash
make build

```


4. **Format and Lint code**:
```bash
make format
make lint

```


5. **Clean build artifacts**:
```bash
make clean

```
