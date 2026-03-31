# MedScan Setup Guide

Detailed instructions for getting the development environment running.

## Prerequisites Checklist

Before starting, make sure you have:

- [ ] **Node.js 18+** - Check with `node --version`
- [ ] **npm or yarn** - Comes with Node.js
- [ ] **Git** - Check with `git --version`
- [ ] **Expo Go app** on your phone
- [ ] **Gemini API key** (free tier is fine for development)

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/spotnuru12/MedScan.git
cd MedScan
```

### 2. Install Dependencies

```bash
npm install
```

This installs everything listed in `package.json`. Takes 1-2 minutes.

### 3. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key (starts with "AI...")

### 4. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Open .env in your editor and add your key
# Replace 'your_gemini_api_key_here' with your actual key
```

Your `.env` should look like:
```
GEMINI_API_KEY=AIzaSy...your-actual-key...
APP_ENV=development
```

### 5. Start the Development Server

```bash
npx expo start
```

You'll see a QR code in the terminal.

### 6. Open on Your Phone

1. Open the **Expo Go** app on your phone
2. Scan the QR code
3. The app will load on your device!

## Troubleshooting

### "expo: command not found"
```bash
npm install -g expo-cli
```

### QR code won't scan
- Make sure phone and computer are on the same WiFi network
- Try pressing `w` in terminal to open web version instead

### "Unable to resolve module"
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start -c
```

### Camera doesn't work
- Camera only works on physical devices, not simulators
- Make sure you granted camera permissions when prompted

## Useful Commands

| Command | What it does |
|---------|--------------|
| `npx expo start` | Start dev server |
| `npx expo start -c` | Start with cleared cache |
| `npm install <package>` | Add a new dependency |
| `npx expo install <package>` | Add Expo-compatible dependency |

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** - Quick code snippets
- **Prettier** - Auto-format code
- **ESLint** - Catch errors early
- **GitLens** - See who wrote what

## Need Help?

1. Check the [Expo docs](https://docs.expo.dev/)
2. Search the error message on Stack Overflow
3. Ask your teammate!
