// Select mode: "none", "mp4", or "youtube". Do not enable until the asset exists.
const supplementaryVideo = { mode: "none", mp4: "assets/videos/tcst_supplementary.mp4", poster: "", youtubeId: "" };
const slot = document.getElementById("video-slot");
if (supplementaryVideo.mode === "mp4") {
  const wrap = document.createElement("div"); wrap.className = "video-frame";
  const video = document.createElement("video"); video.controls = true; video.preload = "metadata"; video.src = supplementaryVideo.mp4;
  if (supplementaryVideo.poster) video.poster = supplementaryVideo.poster;
  video.textContent = "Your browser does not support embedded video."; wrap.append(video); slot.replaceChildren(wrap);
} else if (supplementaryVideo.mode === "youtube" && /^[A-Za-z0-9_-]{11}$/.test(supplementaryVideo.youtubeId)) {
  const wrap = document.createElement("div"); wrap.className = "video-frame";
  const frame = document.createElement("iframe"); frame.src = "https://www.youtube-nocookie.com/embed/" + supplementaryVideo.youtubeId; frame.title = "Supplementary video"; frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"; frame.allowFullscreen = true; frame.loading = "lazy"; wrap.append(frame); slot.replaceChildren(wrap);
}
