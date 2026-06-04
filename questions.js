/* =====================================================================
 *  GOOD or NO LIFT — 影片判讀題庫
 *
 *  學員看主持人大螢幕播放的影片，判斷裁判該給「成功」還是「失敗」，
 *  公布時可看到全班的判決比例。
 *
 *  ★ 每題格式 ★
 *    sec     : 章節 / 影片編號標籤（顯示用）
 *    video   : YouTube「不公開 unlisted」連結，三種寫法都可以：
 *                "https://youtu.be/XXXXXXXXXXX"
 *                "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 *                "XXXXXXXXXXX"   ← 直接貼 11 碼影片 ID 也行
 *    q       : 題目提示文字（例如「抓舉 · 第 2 次試舉」）
 *    options : 固定兩個 ["GOOD LIFT 成功", "NO LIFT 失敗"]
 *    answer  : 正確判定，三選一：
 *                0          = GOOD LIFT 成功
 *                1          = NO LIFT 失敗
 *                "dispute"  = 爭議案例（無標準答案，不公布正解、開放討論）
 *    actual  : （僅爭議題用，可省略）影片當時實際判定 0 或 1，公布時會顯示
 *    note    : 公布答案時顯示的判定理由 / 條文出處 / 討論引導
 *
 *  ★ 怎麼新增題目 ★
 *    1. 影片上傳到你的 YouTube，能見度設「不公開 unlisted」
 *    2. 複製一段 { ... } 貼到下面，換掉 video / q / answer / note
 *    3. 存檔、重新整理網頁即可生效
 *    （爭議題：answer 寫 "dispute"，再用 actual 標出當時實際結果）
 *
 *  小提醒：每個欄位用「英文雙引號」包起來，每行結尾逗號別漏，{ } 要成對。
 * ===================================================================== */

const QUESTIONS = [
  {
    sec: "影片判讀 #1（範例）",
    video: "https://youtu.be/nrgnH9fTfGo",   // 測試用公開影片：Lasha 225kg 抓舉世界紀錄
    q: "你的選擇是？",
    options: ["GOOD LIFT 成功", "NO LIFT 失敗"],
    answer: 0,
    note: "（測試範例）穩定過頭鎖定、雙腳回正、靜候 Down 信號 → 成功。正式使用時換成你的不公開影片與實際理由。"
  },
  {
    sec: "影片判讀 #2",
    video: "https://youtu.be/REPLACE_ME_2",
    q: "你的選擇是？",
    options: ["GOOD LIFT 成功", "NO LIFT 失敗"],
    answer: 1,
    note: "（範例）到達分腿/蹲底後手臂仍繼續伸展 = press-out，失敗。（TCRR 2.5）請改成實際理由。"
  },
  {
    sec: "影片判讀 #3",
    video: "https://youtu.be/REPLACE_ME_3",
    q: "你的選擇是？",
    options: ["GOOD LIFT 成功", "NO LIFT 失敗"],
    answer: 1,
    note: "（範例）放下槓鈴前未待裁判 Down 信號 / 身體（雙腳除外）觸台 → 失敗。請改成實際理由。"
  },
  {
    sec: "影片判讀 #4（爭議案例範例）",
    video: "https://youtu.be/REPLACE_ME_4",
    q: "你的選擇是？",
    options: ["GOOD LIFT 成功", "NO LIFT 失敗"],
    answer: "dispute",        // ← 爭議案例：不公布正解
    actual: 0,               // ← 影片當時實際判定（0=成功、1=失敗），公布時顯示
    note: "（爭議範例）此舉是否輕微 press-out 各裁判見解不一。當時三審多數判成功；可請學員分組討論判定依據。"
  }
];
