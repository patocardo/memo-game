# Memo Test Game

Welcome to the Memo Test Game - a fun and interactive card matching game built with Laravel, Lighthouse, NextJs, Apollo, and Docker.

## Overview

The Memo Test game is a classic card-matching game where players take turns to flip two cards. If the cards match (i.e., they have the same image), the player gains a point, and the cards remain face-up. If the cards don't match, they are flipped back, and the next player takes their turn. The game ends when all the cards have been matched.

### Features

- **User Registration**: Before starting the game, players are prompted to enter the game's name, and the names of the two players.
- **Scoreboard**: Track the scores of both players in real-time.
- **Card Board**: A board displaying the cards to be matched.
- **Player Indicator**: The header displays the name of the current player, indicating whose turn it is.

## Technical Stack

- **Backend**: Laravel with Lighthouse for GraphQL server.
- **Database**: SQLite 3
- **Frontend**: NextJs with Apollo for GraphQL client.
- **Containerization**: Docker containers for both frontend, backend, and nginx.

## Installation

For detailed installation instructions, please refer to the [INSTALL.md](INSTALL.md) file.

## Further development

The application is aimed to evolve in several ways. You can check the [plain backlog](/documents/backlog.md)

## Contributing

This repository is aimed for practizing. If you want to fork it and edit it for your own purposes, you are welcome.
Check the [architecture document](/documents/architecture.md) to have a better idea of how to navigate the code

## License

This project is open-source and available under the [GNU License](/documents/LICENSE).

## Credits

This project was developed by [patocardo](https://github.com/patocardo).


