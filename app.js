document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Pobieranie elementów z HTML
  const spotifyData = document.getElementById("spotify-data");
  const fortniteData = document.getElementById("fortnite-data");
  const spotifyModule = document.getElementById("spotify-module");
  
  const btnGithub = document.getElementById("action-github");
  const btnTelegram = document.getElementById("action-telegram");

  // 2. Budowanie wyglądu kafelka Spotify
  const spotifyPreview = AppConfig.previewMode.spotify;
  
  spotifyData.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <span style="font-weight: 700; font-size: 1.2rem;">${spotifyPreview.song}</span>
      <span style="color: var(--text-secondary);">${spotifyPreview.artist}</span>
    </div>
  `;
  
  // Zmiana koloru obramowania na kolor z konfiguracji
  spotifyModule.style.borderColor = spotifyPreview.accentColor;
  spotifyModule.style.boxShadow = `0 0 16px ${spotifyPreview.accentColor}33`; // 33 to delikatna przezroczystość

  // 3. Budowanie wyglądu kafelka Fortnite
  const fnPreview = AppConfig.previewMode.fortnite;
  
  fortniteData.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 8px;">
      <span style="color: var(--text-secondary);">Tryb:</span>
      <span style="font-weight: 700;">${fnPreview.mode}</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 8px;">
      <span style="color: var(--text-secondary);">K/D Ratio:</span>
      <span style="font-weight: 700;">${fnPreview.kd}</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span style="color: var(--text-secondary);">Zwycięstwa:</span>
      <span style="font-weight: 700;">${fnPreview.wins}</span>
    </div>
  `;

  // 4. Obsługa kliknięć w przyciski (Intenty Androida)
  btnGithub.addEventListener("click", () => {
    window.location.href = AppConfig.social.github;
  });

  btnTelegram.addEventListener("click", () => {
    window.location.href = AppConfig.social.telegram;
  });

});
