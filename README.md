<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# PM Portfolio

Portfolio website for Product Manager - Trust, Clarity, Speed

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will be available at `http://localhost:3000`

## Build for Production

**For local preview:**
```bash
npm run build
npm run preview
```

**For GitHub Pages deployment:**
The project is configured to work with GitHub Pages. When deployed, it will automatically use the correct base path.

## Optional: Environment Variables

If you need to use Gemini API (optional):
1. Create a `.env.local` file in the root directory
2. Add: `GEMINI_API_KEY=your_api_key_here`
