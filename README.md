# TOTLE - Topic Catalogue Search Component

This project is a React-based implementation of a Topic Catalogue with real-time search filtering. It was built as part of TOTLE’s Frontend Developer Intern Coding Assessment.

---

## 🚀 Features
- Real-time, case-insensitive search
- Clean grid layout UI with modern styling
- Topic cards with image, name, and category
- Smooth fade-in animations
- Soft gradient background
- Branded header bar
- Fully client-side, no backend required

---

## 📂 Project Structure

```
src/
│── components/
│   └── TopicSearch.jsx
    └── TopicSearch.css
│── Data/
│   └── topics.js
│── App.jsx
│── index.css
│── index.js
```

---

## 🔧 Step-by-Step Workflow Process

### 1. Initialize React Project
```
npx create-react-app topic-search
cd topic-search
```

### 2. Setup Folder Structure  
- Added `TopicSearch.jsx` inside `src/components/`
- Added `topics.js` inside `src/Data/`
- Added `TopicSearch.css` inside `src/components/`

### 3. Implement Search Logic  
- Used React `useState` for search input  
- Added trimming + `.filter()` for case-insensitive matching  
- Displayed “No topics found” when no results match  

### 4. Build UI  
- Added header bar (branding)  
- Designed premium search bar with icon  
- Created responsive grid layout  
- Implemented fade-in animations for topic cards  
- Added a soft gradient background  

### 5. Final Review  
- Checked responsiveness  
- Verified all images load  
- Cleaned and optimized styles  

---

## ▶️ Video Explanation  
A **2-minute video** is included in the repository explaining:
- Folder structure  
- Component logic  
- Search functionality  
- UI design choices  

**File included:** https://drive.google.com/file/d/1O4wowHCArkdvx7-0DPTmpusgC7fjm2Qm/view?usp=sharing

---

## 📦 How to Run the Project

1. Clone the repo  
```
git clone https://github.com/kuppamkamalesh/Totle-FrontEnd
```

2. Install dependencies  
```
npm install
```

3. Start the dev server  
```
npm start
```

Project runs at:  
`http://localhost:3000`

---

## 🔗 GitHub Repository  
**https://github.com/kuppamkamalesh/Totle-FrontEnd**

---

## 🔗 Deployed Live Link  
**https://totle-front-end.vercel.app/**

---

## 👨‍💻 Developer  
Frontend Developer Intern Assignment – TOTLE  
