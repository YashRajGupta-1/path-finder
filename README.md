# 🧭 Pathfinding Visualizer

<div align="center">

**An interactive visualizer for pathfinding algorithms and maze generation — watch A\*, Dijkstra's, BFS, and DFS explore a 1,900-tile grid in real time.**

Pick an algorithm, generate a maze, press play — and see exactly how each one thinks.

<br />

[![React](https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## The Problem: The "Black Box" in Learning Algorithms

Pathfinding algorithms live as pseudocode in textbooks — correct, but invisible:

*   **Abstract to the point of invisible:** reading Dijkstra's pseudocode tells you *what* it does, never *how it moves*. You can't see the frontier expanding.
*   **No intuition for trade-offs:** why does A\* beat Dijkstra here but not there? Without watching both run on the same maze, the heuristic's power is just a claim.
*   **Mazes feel like magic:** recursive division and binary-tree generation are algorithms too — but most people only ever see the finished maze, never the carving.

**What's needed:** a sandbox where you place the walls, pick the algorithm, press play — and watch the search unfold tile by tile, so the differences between algorithms become something you've *seen*, not something you've read.

---

## Overview

![Pathfinding visualization](assets/overview.png)

A React + Vite app rendering a 39×49 interactive grid. Draw walls, reposition start/end tiles, generate a maze, choose an algorithm and speed — then watch the traversal animate and the shortest path light up.

```text
Interactive grid (draw walls, move start/end)
        ↓
Pick algorithm (A* / Dijkstra / BFS / DFS) + maze + speed
        ↓
Algorithm explores → tiles light up in real time
        ↓
Shortest path glows green
```

---

## Live Application

| Service | URL |
|---|---|
| Web Application | [path-finder](https://path-finder-phi-one.vercel.app/) |

---

## Demo

![Pathfinding Visualizer Demo](src/assets/pathfinding-visualizer.gif)

---

## 🎯 Project Goals

### 1. Make the abstract visible
Every algorithm's personality should be *watchable* — Dijkstra's uniform wave, A\*'s directed lunge toward the goal, BFS/DFS's blind systematic sweep.

### 2. Real algorithms, not animations
The visualization replays genuine algorithm output (traversed order + parent pointers), not a canned animation. What you see is what the code computed.

### 3. Playable maze generation
Mazes aren't backdrops — binary-tree and recursive-division generators run live on the grid, so you can watch the walls being carved before the search begins.

### 4. 60fps-friendly rendering
A 1,911-tile grid re-rendered through React state on every step would stutter. Animation bypasses React re-renders with direct DOM updates.

---

## 🧠 Architecture

![Architecture](assets/architecture.png)

```text
                 ┌──────────────────┐
                 │   React UI       │
                 │ Grid · Tile · Nav│
                 │ PlayButton·Select│
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  Custom hooks +  │
                 │   Context API    │
                 │ usePathfinding   │
                 │ useSpeed·useTile │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Algorithm runners│
                 │ runPathfinding   │
                 │ runMazeAlgorithm │
                 └────────┬─────────┘
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
     ┌────────────┐ ┌──────────┐ ┌────────────┐
     │ Pathfinding│ │  Maze    │ │  Animate   │
     │ aStar (Man-│ │ binary   │ │ direct DOM │
     │ hattan heur│ │ Tree,    │ │ updates,   │
     │ ),dijkstra,│ │ recursive│ │ no React   │
     │ bfs , dfs  │ │ Division │ │ re-renders │
     └────────────┘ └──────────┘ └────────────┘
```

**State design:** three focused contexts keep concerns apart — `PathfindingContext` (algorithm + grid + run functions), `SpeedContext` (animation speed), `TileContext` (walls, start/end tiles). Components consume them through thin `useX` hooks that throw a clear error outside their provider, instead of prop drilling.

**Animation trick:** `animatePath` schedules `setTimeout` chains that set `document.getElementById("row-col").className` directly. React never re-renders during playback — the grid stays smooth at any speed.

---

## ✨ Core Features

### 4 pathfinding algorithms

```text
A*  (Manhattan-distance heuristic) → directed, usually fastest
Dijkstra → uniform expansion, guaranteed shortest
BFS → level-by-level sweep
DFS → deep dives, dives again
```

Run any two on the same maze and the trade-off stops being theoretical.

### 2 maze generators

- **Binary tree** — fast, biased corridors
- **Recursive division** — chambered mazes via horizontal/vertical wall splitting

Both carve live on the grid before the search starts.

### Full playground controls

- Draw/erase walls, reposition start and end tiles
- Speed control for the animation
- Toggle filters mid-session: re-run instantly with different settings

---

## 📁 Project Structure

```text
path-finder/
├── src/
│   ├── components/          # Grid, Tile, Nav, PlayButton, Select
│   ├── context/             # PathfindingContext, SpeedContext, TileContext
│   ├── hooks/               # usePathfinding, useSpeed, useTile
│   ├── lib/algorithms/
│   │   ├── pathfinding/     # aStar, dijkstra, bfs, dfs
│   │   └── maze/            # binaryTree, recursiveDivision (+ helpers)
│   ├── utils/               # animatePath, heuristics, constants
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Run it

```bash
npm install
npm run dev
```

Or just open the [live demo](https://path-finder-phi-one.vercel.app/) — no setup needed.

---

## 👤 Author

**Yash Raj Gupta**
B.Tech, IIT (BHU) Varanasi

- GitHub: [@YashRajGupta-1](https://github.com/YashRajGupta-1)
