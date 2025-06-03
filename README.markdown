# Interactive Quiz Game

## Overview
The **Interactive Quiz Game** is a web-based application that allows users to test their knowledge across various categories, including General Knowledge, Science, History, and Sports. The game features a clean, responsive interface with a timed quiz format, instant feedback, and a results summary. Users can select a category, answer multiple-choice questions, and view their performance at the end.

## Features
- **Multiple Categories**: Choose from General Knowledge, Science, History, or Sports.
- **Timed Questions**: Each question has a 30-second timer.
- **Instant Feedback**: Correct and incorrect answers are highlighted immediately.
- **Progress Tracking**: Displays current question, score, and time remaining.
- **Results Summary**: Shows final score, correct/incorrect answers, accuracy percentage, and time taken.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.

## Project Structure
```
interactive-quiz-game/
├── index.html        # Main HTML file with the quiz structure
├── styles.css        # CSS file for styling the quiz interface
├── quiz-data.js      # JavaScript file containing quiz questions
├── script.js         # JavaScript file for quiz logic
├── README.md         # Project documentation
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/interactive-quiz-game.git
   cd interactive-quiz-game
   ```

2. **Open the Project**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox) to run the quiz locally.
   - Alternatively, serve the project using a local server (e.g., with VS Code's Live Server extension or `python -m http.server`).

3. **Dependencies**:
   - No external libraries or dependencies are required. The project uses plain HTML, CSS, and JavaScript.

## Usage
1. **Start the Quiz**:
   - Open `index.html` in a browser.
   - Select a category (General Knowledge, Science, History, or Sports) from the welcome screen.
2. **Answer Questions**:
   - Answer each question by clicking one of the multiple-choice options.
   - You have 30 seconds per question. If time runs out, the answer is marked incorrect.
   - Correct answers turn green, incorrect answers turn red.
3. **View Results**:
   - After completing the quiz, view your final score, correct/incorrect answers, accuracy, and time taken.
   - Click "Play Again" to return to the welcome screen and choose another category.

## Customization
- **Add Questions**:
  - Edit `quiz-data.js` to add or modify questions. Each category should have an array of question objects with `question`, `options`, and `answer` properties.
  - Example:
    ```javascript
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    }
    ```
- **Styling**:
  - Modify `styles.css` to change the appearance (colors, fonts, layout, etc.).
- **Logic**:
  - Update `script.js` to change quiz behavior, such as timer duration or scoring system.

## Deployment
To host the quiz online:
1. **GitHub Pages**:
   - Push the project to a GitHub repository.
   - Enable GitHub Pages in the repository settings, selecting the `main` branch and `/ (root)` as the source.
   - Access the live site at `https://your-username.github.io/interactive-quiz-game`.
2. **Other Hosting**:
   - Upload the project files to a web hosting service (e.g., Netlify, Vercel) by dragging and dropping the project folder or linking the GitHub repository.

## Uploading to GitHub
1. **Initialize a Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Interactive Quiz Game"
   ```
2. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository named `interactive-quiz-game`.
   - Follow the instructions to link your local repository:
     ```bash
     git remote add origin https://github.com/your-username/interactive-quiz-game.git
     git branch -M main
     git push -u origin main
     ```
3. **Verify**:
   - Ensure all files (`index.html`, `styles.css`, `quiz-data.js`, `script.js`, `README.md`) are uploaded to the repository.

## Future Improvements
- Add more categories and questions.
- Implement a high-score system with local storage.
- Add animations for smoother transitions.
- Include sound effects for correct/incorrect answers.
- Support dynamic question loading from an API.

## Contributing
Contributions are welcome! Please fork the repository, make changes, and submit a pull request with a clear description of your updates.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, contact Nishu Barnwal at [nishubarnwal300@gmail.com] or open an issue on GitHub.
