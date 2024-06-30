# Trivia Quiz

This project is a simple trivia quiz game built with HTML, CSS, and JavaScript. The quiz fetches random questions from an API and allows users to select answers, keeping track of their score.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

You need a modern web browser and a text editor or IDE of your choice.

1. Clone the repository:
```sh 
git clone https://github.com/yourusername/trivia-quiz.git
```

2. Open the project directory:
```sh 
cd trivia-quiz
```

3. Open index.html in your web browser:
```sh 
open index.html
```

## Usage

Once you have the project running in your web browser:

1. The quiz will display a welcome message.
2. A random question will be displayed with multiple-choice options.
3. Click on an option to select your answer.
4. The selected answer will be highlighted in green if correct and in red if incorrect.
5. After a short delay, the next question will be displayed.
6. The quiz will continue until all questions have been answered.
7. Your score will be displayed at the end of the quiz.

## Project Structure

```txt
trivia-quiz/
│
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── index.js            # JavaScript file for quiz functionality
└── README.md           # Project documentation
```

## API

This project uses the [Trivia](https://the-trivia-api.com/) API to fetch random questions. The API endpoint used is:

```txt
https://the-trivia-api.com/v2/questions
```