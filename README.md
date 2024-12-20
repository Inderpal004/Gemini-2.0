# Project: Gemini Chat Assistant Clone

A web application inspired by Google's Gemini Assistant. This project allows users to interact with a generative AI model for natural language responses and task assistance.

## Features

- Responsive design with Tailwind CSS
- Chat interface for prompt-based interactions
- Dynamic results rendering using React
- Authentication via Clerk for secure user management
- Integration with Google Generative AI API (Gemini)
- Safety settings for content moderation

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI API

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd gemini-2.0
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```env
   VITE_GEMINI_API_KEY=<Your_Google_Generative_AI_API_Key>
   CLERK_FRONTEND_API=<Your_Clerk_Frontend_API_Key>
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Sign in or sign up using Clerk authentication.
2. Enter a prompt in the chat input field and press send.
3. View the AI-generated response below your prompt.
4. Access your recent prompts and responses in the history section.

## Configuration

- **Google Generative AI**: The API key must be configured in the `.env` file as `VITE_GEMINI_API_KEY`.
- **Clerk**: Ensure your Clerk frontend API key is added in the `.env` file as `CLERK_FRONTEND_API`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Serves the production build locally.

## Folder Structure

```
├── public
├── src
│   ├── assets          # Static assets (images, icons, etc.)
│   ├── components      # Reusable components
│   ├── pages           # Application pages
│   ├── hooks           # Custom React hooks
│   ├── utils           # Utility functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Authentication with Clerk

This project uses Clerk for authentication. Users can sign up, log in, and manage their sessions seamlessly.

### Setting Up Clerk

1. Create a Clerk account at [Clerk.dev](https://clerk.dev/).
2. Obtain your Clerk frontend API key from the Clerk dashboard.
3. Add the key to your `.env` file as `CLERK_FRONTEND_API`.

## Contributions

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Note:** This project is for educational purposes and is not affiliated with Google or its Gemini Assistant.