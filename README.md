# 💝 Valentine's Day Gift Website

A beautiful, romantic website created as a Valentine's Day gift for someone special. This website showcases your love story, memories together, and heartfelt messages.

## ✨ Features

- **🌹 Romantic Landing Page** - Beautiful animated entrance with floating hearts
- **🎵 Music Player** - Your special song "Khwab" plays in the background with a floating music player
- **📖 Our Story Timeline** - Starts from 1st Feb 2024 when you first started talking
- **📸 Memories Gallery** - All 48 photos and 3 videos with auto-corrected orientation
- **❤️ Reasons I Love You** - 9 heartfelt reasons with beautiful animations
- **💌 Love Letters** - 3 interactive love letters that unfold when clicked
- **💝 Final Message** - A special Valentine's Day message with romantic styling
- **🎨 Beautiful Animations** - Floating hearts, heart trail following cursor, smooth transitions
- **📱 Fully Responsive** - Looks perfect on all devices

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   cd C:\VsCode\Bae
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   - The website will automatically open at `http://localhost:3000`
   - Or manually visit the URL in your browser

## 🎁 Personalizing the Website

You can customize the content to make it even more personal:

### 1. Update the Timeline ([src/components/OurStory.js](src/components/OurStory.js))
   - Edit the `milestones` array
   - Change dates, titles, and descriptions to match your real story

### 2. Customize Photo Captions ([src/components/MemoriesGallery.js](src/components/MemoriesGallery.js))
   - Edit the `caption` field for each image
   - Add meaningful descriptions for each memory

### 3. Edit Reasons I Love You ([src/components/ReasonsILoveYou.js](src/components/ReasonsILoveYou.js))
   - Modify the `reasons` array
   - Add your own personal reasons with custom emojis

### 4. Personalize Love Letters ([src/components/LoveLetters.js](src/components/LoveLetters.js))
   - Rewrite the `letters` array with your own messages
   - Make them as personal and romantic as you want

### 5. Update Final Message ([src/components/FinalMessage.js](src/components/FinalMessage.js))
   - Change the final Valentine's message
   - Update the signature name

## 📂 Project Structure

```
Bae/
├── public/
│   ├── index.html
│   ├── images/          # 48 images (img_001.jpg to img_048.jpg)
│   └── videos/          # 3 videos (vid_001.mp4 to vid_003.mp4)
├── src/
│   ├── components/
│   │   ├── LandingPage.js & .css      # Entry page with "Open Your Gift" button
│   │   ├── FloatingHearts.js & .css   # Animated hearts background
│   │   ├── OurStory.js & .css         # Relationship timeline
│   │   ├── MemoriesGallery.js & .css  # Photo & video gallery
│   │   ├── ReasonsILoveYou.js & .css  # Reasons with animations
│   │   ├── LoveLetters.js & .css      # Interactive love letters
│   │   └── FinalMessage.js & .css     # Final Valentine's message
│   ├── App.js           # Main component
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Color Scheme

- **Primary**: Pink gradients (#ff6b9d, #c44569)
- **Secondary**: Purple gradients (#667eea, #764ba2)
- **Accent**: White with transparency for glass-morphism effects

## 💡 Tips for Deployment

### Option 1: Build for sharing as files
```bash
npm run build
```
Then share the `build` folder - open `index.html` to view

### Option 2: Deploy online (FREE options)
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Follow GitHub's hosting guide

## 💖 Making It Even More Special

- Add background music (create an audio player component)
- Include a countdown to your next anniversary
- Add more interactive elements like quizzes or games
- Create a "Messages from friends" section
- Add a guestbook for her to write her reaction

## 🎯 Final Touch

Before giving this gift:
1. ✅ Customize all the personal messages
2. ✅ Update dates and milestones
3. ✅ Test on mobile and desktop
4. ✅ Add your own signature/name in the final message
5. ✅ Make sure all images load properly

---

**Made with ❤️ for Valentine's Day 2026**

*Every line of code written with love*
