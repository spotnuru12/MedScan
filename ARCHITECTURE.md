# MedScan Architecture

This document explains how MedScan works under the hood. Read this before diving into the code!

## Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        USER DEVICE                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│  │  Screens │───▶│Components│───▶│ Services │              │
│  │  (pages) │    │(UI parts)│    │ (logic)  │              │
│  └──────────┘    └──────────┘    └────┬─────┘              │
│                                       │                     │
└───────────────────────────────────────┼─────────────────────┘
                                        │ API calls
                                        ▼
                              ┌──────────────────┐
                              │   Gemini API     │
                              │  (Google Cloud)  │
                              └──────────────────┘
```

## Data Flow: Scanning a Bottle

Here's exactly what happens when a user scans a prescription bottle:

### Step 1: Capture Image
**File:** `src/screens/ScanScreen.js`

```
User taps "Scan" → Camera opens → User takes photo → Image saved as base64
```

We use `expo-camera` for this. The image is converted to base64 format because that's what the Gemini API expects.

### Step 2: Send to Gemini Vision
**File:** `src/services/gemini.js`

```
Base64 image → Gemini Vision API → Raw text extraction + structured JSON
```

We send the image with a carefully crafted prompt that tells Gemini:
- Extract all text from the prescription label
- Identify the drug name, dosage, and instructions
- Return structured JSON we can use

### Step 3: Validate & Enrich
**File:** `src/services/drugDatabase.js` (future)

```
Drug name → Drug database lookup → Verify spelling, get additional info
```

This step helps us:
- Correct OCR mistakes ("Lisinopri" → "Lisinopril")
- Add information not on the label (common side effects, interactions)

### Step 4: Simplify & Translate
**File:** `src/services/gemini.js`

```
Medical jargon → Gemini text API → Simple explanation in user's language
```

Example transformation:
- Input: "Take 1 tablet PO QD with or without food"
- Output: "Take 1 pill by mouth once a day. You can take it with food or on an empty stomach."

### Step 5: Display Result
**File:** `src/screens/ResultScreen.js`

```
Simplified data → MedCard component → User sees clear instructions
```

## Key Files Explained

### Screens (src/screens/)
Each screen is a full page in the app.

| File | Purpose |
|------|---------|
| `HomeScreen.js` | Main menu, list of saved medications |
| `ScanScreen.js` | Camera view for scanning bottles |
| `ResultScreen.js` | Shows the simplified medication info |
| `MedicationScreen.js` | Detailed view of one medication |
| `SettingsScreen.js` | Language preferences, caregiver setup |

### Components (src/components/)
Reusable UI pieces used across screens.

| File | Purpose |
|------|---------|
| `Camera.js` | Wrapper around expo-camera with our styling |
| `MedCard.js` | Card displaying one medication's info |
| `Button.js` | Styled button component |
| `LanguagePicker.js` | Dropdown to select language |

### Services (src/services/)
Business logic and API calls. **No UI code here.**

| File | Purpose |
|------|---------|
| `gemini.js` | All Gemini API interactions |
| `drugDatabase.js` | Drug lookup and validation |
| `storage.js` | Save/load data locally (AsyncStorage) |
| `notifications.js` | Medication reminders |

## State Management

For now, we keep it simple:

```
┌─────────────────────────────────────┐
│           React Context             │
│  ┌─────────────┐  ┌──────────────┐  │
│  │ UserContext │  │ MedsContext  │  │
│  │ - language  │  │ - medications│  │
│  │ - settings  │  │ - reminders  │  │
│  └─────────────┘  └──────────────┘  │
└─────────────────────────────────────┘
```

If this gets complex, we can add Zustand later.

## Error Handling Strategy

Every service function follows this pattern:

```javascript
async function doSomething() {
  try {
    // Happy path
    const result = await apiCall();
    return { success: true, data: result };
  } catch (error) {
    // Log for debugging
    console.error('doSomething failed:', error);
    // Return structured error
    return { success: false, error: error.message };
  }
}
```

This lets screens show helpful error messages instead of crashing.

## Security Considerations

1. **API Keys**: Never hardcode. Always use `.env` file.
2. **User Data**: Stored locally only. No server (for now).
3. **Caregiver Access**: Requires explicit consent flow.
4. **Medical Disclaimer**: We explain, we don't diagnose.

## Future Architecture (Phase 2+)

When we add caregiver features, we'll need a backend:

```
┌─────────┐     ┌─────────┐     ┌──────────────┐
│ Patient │────▶│ Backend │◀────│  Caregiver   │
│   App   │     │  (API)  │     │     App      │
└─────────┘     └────┬────┘     └──────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   Database   │
              │ (encrypted)  │
              └──────────────┘
```

But that's later. For now, we're building the core scanning feature.

## Questions?

If something doesn't make sense, ask! Better to clarify than to build the wrong thing.
