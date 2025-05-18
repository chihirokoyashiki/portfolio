document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // 1. ヘッダータイトル → トップへ遷移
  // ===============================
  const title = document.querySelector(".header_title");
  if (title) {
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // ===============================
  // 2. ヘッダーナビ（クリックで active & 遷移）
  // ===============================
  const navLabels = document.querySelectorAll(".nav_list_label");
  navLabels.forEach(label => {
    label.style.cursor = "pointer";
    label.addEventListener("click", () => {
      // 他のラベルの active を除去
      navLabels.forEach(l => l.classList.remove("active"));
      // クリックしたラベルに active 追加
      label.classList.add("active");

      // ページ遷移
      const text = label.textContent.trim().toUpperCase();
      switch (text) {
        case "ABOUT":
          window.location.href = "about.html";
          break;
        case "WORKS":
          window.location.href = "works.html";
          break;
        case "NEWS":
          window.location.href = "news.html";
          break;
        case "CONTACT":
          window.location.href = "contact.html";
          break;
      }
    });
  });

  // ===============================
  // 3. お問い合わせボタン → contact.html 遷移
  // ===============================
  const contactButtons = document.querySelectorAll(".nav_contact_button");
  contactButtons.forEach(btn => {
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  });

  // ===============================
  // 4. ABOUT MEボタン → about.html 遷移
  // ===============================
  const aboutMeButton = document.querySelector(".button_text");
  if (aboutMeButton) {
    aboutMeButton.style.cursor = "pointer";
    aboutMeButton.addEventListener("click", () => {
      window.location.href = "about.html";
    });
  }

  // ===============================
  // 5. WORKSタイトル → works.html 遷移
  // ===============================
  const contentTitle = document.querySelector(".content_title");
  const contentSubTitle = document.querySelector(".service_title_ja");

  [contentTitle, contentSubTitle].forEach(el => {
    if (el) {
      el.style.cursor = "pointer";
      el.addEventListener("click", () => {
        window.location.href = "works.html";
      });
    }
  });

  // ===============================
  // 6. NEWSタイトル → news.html 遷移
  // ===============================
  const newsTitle = document.querySelector(".post_title");
  if (newsTitle) {
    newsTitle.style.cursor = "pointer";
    newsTitle.addEventListener("click", () => {
      window.location.href = "news.html";
    });
  }

  // ===============================
  // 7. BACKボタン → index.html 遷移
  // ===============================
  const backButton = document.querySelector(".back_button");
  if (backButton) {
    backButton.style.cursor = "pointer";
    backButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // ===============================
  // 8. MOREボタン → モーダル開閉処理
  // ===============================
  const moreButtons = document.querySelectorAll(".grid_transition_button, .content_thumbnail_button");
  const modalWrapper = document.querySelector(".works_moreview");
  const detailBoxes = document.querySelectorAll(".moreview_grid");
  const closeButtons = document.querySelectorAll(".moreview_close, .moreview_back_button");

  moreButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // モーダルを表示
      if (modalWrapper) modalWrapper.style.display = "block";

      // すべて非表示にして対象だけ表示
      detailBoxes.forEach(box => box.style.display = "none");
      const targetBox = document.getElementById((index + 1).toString());
      if (targetBox) targetBox.style.display = "flex";
    });
  });

  // 閉じるボタン → モーダル非表示
  closeButtons.forEach(close => {
    close.addEventListener("click", () => {
      if (modalWrapper) modalWrapper.style.display = "none";
      detailBoxes.forEach(box => box.style.display = "none");
    });
  });
});
