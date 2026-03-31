# MedScan 💊

An AI-powered medication support app for ESL patients and older adults. Scan prescription bottles, get simple explanations in your language.

## 🎯 What This App Does

1. **Scan** - Take a photo of your prescription bottle
2. **Understand** - AI extracts and simplifies the instructions
3. **Translate** - Get explanations in Spanish, Chinese, Korean, or Hindi
4. **Remember** - Reminders help you take meds on time
5. **Connect** - Caregivers can monitor (with your consent)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([download](https://nodejs.org))
- Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- Gemini API key ([get one free](https://makersuite.google.com/app/apikey))

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/spotnuru12/MedScan.git
cd MedScan

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Then edit .env and add your GEMINI_API_KEY

# 4. Start the app
npx expo start
```

Scan the QR code with Expo Go to see the app on your phone!

## 📁 Project Structure

```
MedScan/
├── src/
│   ├── screens/        # App pages (Home, Scan, Result, etc.)
│   ├── components/     # Reusable UI pieces (buttons, cards)
│   ├── services/       # API calls and business logic
│   ├── hooks/          # Custom React hooks
│   └── utils/          # Helper functions
├── assets/             # Images, fonts
├── docs/               # Documentation
└── App.js              # Entry point
```

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |
| `DRUG_DB_API_KEY` | Drug database API (future) | No |

**⚠️ Never commit `.env` to git!** It's in `.gitignore` for a reason.

## 🤝 Working Together

We both work on everything, so let's stay organized:

### Branch Strategy
```bash
main              # Production-ready code
├── dev           # Integration branch
├── feature/scan  # Working on scanning
├── feature/ui    # Working on UI
└── fix/camera    # Bug fixes
```

### Before You Code
1. Pull latest: `git pull origin dev`
2. Create a branch: `git checkout -b feature/your-feature`
3. Make small, focused commits

### Commit Message Format
```
feat: add camera permission handling
fix: resolve blur on bottle scan
docs: update API documentation
style: format ScanScreen component
```

## 📖 Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md) - How the app works
- [Setup Guide](./docs/SETUP.md) - Detailed installation steps
- [API Reference](./docs/API.md) - Service functions

## 🛠 Tech Stack

- **Framework**: React Native + Expo
- **AI**: Google Gemini 2.5 Pro (Vision + Text)
- **State**: React Context (simple) or Zustand (if needed)
- **Storage**: AsyncStorage for local data
- **Navigation**: React Navigation

## 📝 Current Status

- [ ] Project setup
- [ ] Camera integration
- [ ] Gemini API connection
- [ ] Bottle scanning + OCR
- [ ] Result display
- [ ] Multi-language support
- [ ] Reminder system
- [ ] Caregiver dashboard

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Gemini API Docs](https://ai.google.dev/docs)
- [React Native Basics](https://reactnative.dev/docs/getting-started)

---

Built with ❤️ for the TEL Venture Project
