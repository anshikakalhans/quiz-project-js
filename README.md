# quiz-project-js
# Simple Interactive Quiz (Browser Console)

This is a basic interactive quiz implemented in JavaScript. It uses standard browser functions and is designed to run simply by pasting it directly into a **browser's Developer Console**.

## How to Run

1.  **Open the Console:** Open your web browser (e.g., Chrome, Firefox).
2.  **Open Developer Tools:** Press `F12` or right-click anywhere and select "Inspect" or "Inspect Element." Go to the **Console** tab.
3.  **Paste and Run:** Copy the entire JavaScript code and paste it directly into the Console input line. Press **Enter** or **Run**.

The quiz will start immediately using native browser dialog boxes.

## Features

* **Interactive Dialogs:**
* **Case/Spacing Insensitive:** User input is automatically cleaned (`toLowerCase()`, `trim()`) to match the answer.
* **Score Tracking:** Updates and displays the score after each question.
* **Cancellation Handling:** Safely exits the quiz if the user clicks "Cancel" on a prompt.
