# Supplementary video integration

The site is private and no Pages deployment is authorized.

1. Copy the final optimized MP4 to `assets/videos/tcst_supplementary.mp4`.
2. In `assets/video-config.js`, change `mode: "none"` to `mode: "mp4"`.
3. Optionally copy a thumbnail to `assets/videos/` and set `poster` to its relative path. Leave it empty for no poster.
4. For YouTube instead, set `mode: "youtube"` and set `youtubeId` to the 11-character video ID; do not set the full URL. The embed uses youtube-nocookie.com.
5. Run `python3 -m http.server 8000` from the repository, visit `http://localhost:8000/`, and check playback, controls, and mobile layout. Commit and push the file and configuration only to the private repository. Deploy only after explicit authorization; private repositories do not guarantee private Pages. Avoid committing large videos; use YouTube when appropriate.
