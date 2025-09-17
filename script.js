const menuCategories = [
  {
    id: "warmup",
    name: "アップ",
    description: "身体を温めて動きやすくする準備運動",
    items: [
      {
        name: "全体ジョギング",
        focus: "心拍数を上げる・汗をかく",
        duration: 10,
        description: "グラウンド周回やコート往復などで軽く走る。",
        tags: ["走", "準備", "全体"]
      },
      {
        name: "ダイナミックストレッチ",
        focus: "可動域向上とケガ予防",
        duration: 10,
        description: "体幹ひねり・スキップ・ランジなど動きを伴うストレッチ。",
        tags: ["ストレッチ", "柔軟", "体幹"]
      },
      {
        name: "体幹サーキット",
        focus: "体幹強化・姿勢づくり",
        duration: 8,
        description: "プランク・サイドプランク・バランスドリルなど。",
        tags: ["体力", "コーディネーション"]
      },
      {
        name: "リアクションドリル",
        focus: "反応速度向上",
        duration: 6,
        description: "コーチの合図で前後左右にステップ、ボールキャッチなど。",
        tags: ["反応", "敏捷"]
      },
      {
        name: "ペアストレッチ",
        focus: "柔軟性の向上とコミュニケーション",
        duration: 8,
        description: "2人1組で股関節・肩回りを中心にストレッチ。",
        tags: ["ストレッチ", "チーム"]
      }
    ]
  },
  {
    id: "throwing",
    name: "キャッチボール・スローイング",
    description: "基本の投げ込みで肩を慣らす",
    items: [
      {
        name: "ペアキャッチボール",
        focus: "ステップ・リリース確認",
        duration: 12,
        description: "距離を段階的に広げながらフォームを確認。",
        tags: ["投球", "基礎"]
      },
      {
        name: "ショートバウンド捕球",
        focus: "グラブワーク・ハンドリング",
        duration: 8,
        description: "近距離でワンバウンド送球を処理。",
        tags: ["守備", "ゴロ"]
      },
      {
        name: "ロングトス",
        focus: "肩づくり・体重移動",
        duration: 10,
        description: "ゆったりしたフォームで距離を伸ばす投球練習。",
        tags: ["遠投", "強化"]
      },
      {
        name: "ピッチングフォームチェック",
        focus: "バランス・リリースポイント確認",
        duration: 8,
        description: "投手志望者を中心にフォーム撮影や指導。",
        tags: ["投手", "フォーム"]
      },
      {
        name: "ターゲットスロー",
        focus: "的を狙うコントロール練習",
        duration: 8,
        description: "ネットや的に向かってコントロールを意識して投げ込む。",
        tags: ["制球", "集中"]
      }
    ]
  },
  {
    id: "fielding",
    name: "守備",
    description: "ゴロ・フライ・連携など守備力向上",
    items: [
      {
        name: "内野ゴロノック",
        focus: "捕球から送球までの一連動作",
        duration: 15,
        description: "正面・左右振り分け・バント処理などを反復。",
        tags: ["内野", "ゴロ", "反復"]
      },
      {
        name: "外野フライキャッチ",
        focus: "落下点予測とキャッチング",
        duration: 12,
        description: "目線を切らずに前後左右の打球に対応。",
        tags: ["外野", "フライ"]
      },
      {
        name: "ダブルプレー連携",
        focus: "捕球→送球の連携と足さばき",
        duration: 10,
        description: "二遊間コンビでゲッツー動作を徹底。",
        tags: ["内野", "連携"]
      },
      {
        name: "カット・中継プレー",
        focus: "バックホームや進塁阻止の判断",
        duration: 10,
        description: "外野からの返球に合わせてカットマンの動きを確認。",
        tags: ["連携", "外野"]
      },
      {
        name: "前進チャージゴロ",
        focus: "前でさばくゴロ処理とスローイング",
        duration: 10,
        description: "チャージして素早く送球する動きを身につける。",
        tags: ["内野", "機動"]
      },
      {
        name: "捕手ブロッキング",
        focus: "ワンバウンド対応とキャッチング",
        duration: 10,
        description: "捕手向けにショートバウンドを受け止める練習。",
        tags: ["捕手", "守備"]
      }
    ]
  },
  {
    id: "hitting",
    name: "打撃",
    description: "フォームづくりから実戦形式まで",
    items: [
      {
        name: "ティーバッティング",
        focus: "スイング軌道とミートポイント",
        duration: 12,
        description: "基本フォームを固めるための反復練習。",
        tags: ["ティー", "バッティング"]
      },
      {
        name: "トスバッティング",
        focus: "ステップとタイミング",
        duration: 12,
        description: "前からのトスでリズムよく打つ。",
        tags: ["打撃", "リズム"]
      },
      {
        name: "マシン打撃",
        focus: "スピードボール対応",
        duration: 15,
        description: "球速に慣れる・コンタクト率を高める。",
        tags: ["マシン", "スピード"]
      },
      {
        name: "ライブ打撃",
        focus: "実戦感覚の強化",
        duration: 18,
        description: "投手が実際に投げてゲーム形式で打つ。",
        tags: ["実戦", "打撃"]
      },
      {
        name: "バント練習",
        focus: "バットコントロールと小技",
        duration: 8,
        description: "左右コースに正確に転がすコツを習得。",
        tags: ["小技", "チームバッティング"]
      },
      {
        name: "素振りフォームチェック",
        focus: "スイングメカニクスの確認",
        duration: 10,
        description: "鏡や動画を使ってフォームをセルフチェック。",
        tags: ["素振り", "フォーム"]
      },
      {
        name: "逆方向打ちドリル",
        focus: "流し打ちとバットコントロール",
        duration: 10,
        description: "逆方向に打ち分けるバッティングを反復。",
        tags: ["打撃", "コントロール"]
      }
    ]
  },
  {
    id: "baserun",
    name: "走塁",
    description: "走塁テクニックとスピードを磨く",
    items: [
      {
        name: "リード・スタート練習",
        focus: "初動スピードと帰塁判断",
        duration: 10,
        description: "投手の動きに合わせたリード幅・スタート練習。",
        tags: ["盗塁", "判断"]
      },
      {
        name: "盗塁ダッシュ",
        focus: "スピードアップとスライディング",
        duration: 10,
        description: "スタートからベース到達までをタイム計測。",
        tags: ["盗塁", "スピード"]
      },
      {
        name: "ベースランニング",
        focus: "コーナリングと減速しない走塁",
        duration: 12,
        description: "1周走やツーバッグ走など多様なパターン。",
        tags: ["走塁", "ベースワーク"]
      },
      {
        name: "スライディング練習",
        focus: "安全な滑り込み技術",
        duration: 8,
        description: "泥・マットなどを使ってフォームを確認。",
        tags: ["走塁", "安全"]
      },
      {
        name: "タッチアップ判断",
        focus: "外野フライ時のスタートタイミング",
        duration: 8,
        description: "フライ捕球に合わせた足の運びと判断を練習。",
        tags: ["走塁", "判断"]
      }
    ]
  },
  {
    id: "pitching",
    name: "ピッチング",
    description: "投手向けの専門メニュー",
    items: [
      {
        name: "ブルペン投球",
        focus: "コントロールと球種確認",
        duration: 20,
        description: "キャッチャーを座らせてセットメニューをこなす。",
        tags: ["投手", "実戦"]
      },
      {
        name: "フィールディング (投手)",
        focus: "投手守備と状況判断",
        duration: 10,
        description: "バント処理・けん制・カバーリングを反復。",
        tags: ["投手", "守備"]
      },
      {
        name: "コントロールドリル",
        focus: "的当てで制球力向上",
        duration: 12,
        description: "的を複数用意し、的確に狙う練習。",
        tags: ["制球", "精度"]
      },
      {
        name: "ピッチャーカバー練習",
        focus: "ベースカバーとフィールディング",
        duration: 8,
        description: "一塁・本塁カバーやバント処理の足運びを確認。",
        tags: ["投手", "連携"]
      },
      {
        name: "クールダウンスロー",
        focus: "肩のケア・疲労回復",
        duration: 8,
        description: "ゆったりとしたフォームでのスローイング。",
        tags: ["ケア", "回復"]
      }
    ]
  },
  {
    id: "team",
    name: "チーム連携・戦術",
    description: "全体での戦術理解と役割確認",
    items: [
      {
        name: "サインプレー確認",
        focus: "サインの徹底と共有",
        duration: 10,
        description: "攻守のサインを全体で確認し理解度を合わせる。",
        tags: ["連携", "戦術"]
      },
      {
        name: "シチュエーションノック",
        focus: "試合を想定した判断力",
        duration: 15,
        description: "走者ありの場面を想定したプレー選択を学ぶ。",
        tags: ["試合形式", "判断"]
      },
      {
        name: "リレー中継練習",
        focus: "声掛けとカバーリング",
        duration: 12,
        description: "ポジションごとの動きを確認しながら連携。",
        tags: ["中継", "声掛け"]
      },
      {
        name: "守備位置ミーティング",
        focus: "守備隊形と役割整理",
        duration: 8,
        description: "守備シフトやカット位置をホワイトボードで確認。",
        tags: ["座学", "確認"]
      },
      {
        name: "声出し・コミュニケーションドリル",
        focus: "連携時の声掛け習慣づくり",
        duration: 6,
        description: "簡単なゲーム形式で声を掛け合う練習。",
        tags: ["連携", "雰囲気作り"]
      }
    ]
  },
  {
    id: "conditioning",
    name: "フィジカル・基礎体力",
    description: "身体能力と持久力を高める",
    items: [
      {
        name: "ラダートレーニング",
        focus: "フットワークと敏捷性",
        duration: 10,
        description: "ラダーを使って細かなステップワークを反復。",
        tags: ["敏捷", "体力"]
      },
      {
        name: "メディシンボール投げ",
        focus: "体幹と回旋パワー",
        duration: 8,
        description: "メディシンボールを使った投げ込みとトレーニング。",
        tags: ["体幹", "パワー"]
      },
      {
        name: "ショートスプリント",
        focus: "瞬発力アップ",
        duration: 8,
        description: "10〜30mダッシュをインターバルで実施。",
        tags: ["ダッシュ", "瞬発"]
      },
      {
        name: "持久走・インターバル",
        focus: "スタミナ向上",
        duration: 12,
        description: "長距離・シャトルランなど持久力を鍛える。",
        tags: ["持久", "走"]
      },
      {
        name: "コーディネーションゲーム",
        focus: "楽しみながら運動神経を磨く",
        duration: 10,
        description: "ボールを使った反射ゲームやリズム運動を実施。",
        tags: ["コーディネーション", "遊び"]
      }
    ]
  },
  {
    id: "meeting",
    name: "ミーティング・座学",
    description: "頭で理解し戦術を共有",
    items: [
      {
        name: "戦術ミーティング",
        focus: "ゲームプラン確認",
        duration: 12,
        description: "次の試合の戦術や役割を共有。",
        tags: ["座学", "戦術"]
      },
      {
        name: "ルール講座",
        focus: "審判目線の理解",
        duration: 8,
        description: "ルールブックを使って事例を学ぶ。",
        tags: ["ルール", "確認"]
      },
      {
        name: "映像分析",
        focus: "プレー改善のヒント探し",
        duration: 15,
        description: "前回試合の映像を見て良かった点と改善点を整理。",
        tags: ["映像", "振り返り"]
      },
      {
        name: "個別フィードバック",
        focus: "個人課題の共有",
        duration: 10,
        description: "選手ごとに課題と目標を話し合う。",
        tags: ["個別", "コミュニケーション"]
      },
      {
        name: "次回目標設定",
        focus: "練習課題の明確化",
        duration: 6,
        description: "次回までに意識するポイントを各自で設定。",
        tags: ["目標", "振り返り"]
      }
    ]
  },
  {
    id: "cooldown",
    name: "クールダウン",
    description: "疲労回復と振り返り",
    items: [
      {
        name: "スローキャッチ",
        focus: "肩慣らしと整理運動",
        duration: 6,
        description: "軽いキャッチボールで肩をほぐす。",
        tags: ["整理運動", "ケア"]
      },
      {
        name: "スタティックストレッチ",
        focus: "柔軟性回復",
        duration: 8,
        description: "ゆっくりとしたストレッチで筋肉を伸ばす。",
        tags: ["ストレッチ", "クールダウン"]
      },
      {
        name: "アイシング・ケア",
        focus: "疲労抜きとケガ予防",
        duration: 10,
        description: "肩肘のアイシングやフォームローラーでケア。",
        tags: ["ケア", "回復"]
      },
      {
        name: "ふりかえりミーティング",
        focus: "練習の振り返りと次回課題",
        duration: 8,
        description: "今日の気づきを共有し次回に活かす。",
        tags: ["ミーティング", "振り返り"]
      },
      {
        name: "呼吸法・リラクゼーション",
        focus: "副交感神経を働かせ疲労回復",
        duration: 6,
        description: "腹式呼吸やマインドフルネスで心身を落ち着かせる。",
        tags: ["クールダウン", "メンタル"]
      }
    ]
  }
];

const STORAGE_KEY = "少年野球-練習プラン";

if (typeof createPlanStore !== "function") {
  throw new Error("createPlanStore is not available");
}

const planStore = createPlanStore();

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  bindEventListeners();
  loadPlan();
  updatePlanSummary();
  updatePlanText();
});

function renderMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  menuCategories.forEach((category) => {
    const details = document.createElement("details");
    details.className = "category-card";
    details.open = true;

    const summary = document.createElement("summary");
    const title = document.createElement("span");
    title.textContent = category.name;
    summary.appendChild(title);

    if (category.description) {
      const description = document.createElement("span");
      description.textContent = `${category.description} ／ ${category.items.length}メニュー`;
      summary.appendChild(description);
    }

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "menu-items";

    category.items.forEach((item) => {
      const itemCard = document.createElement("div");
      itemCard.className = "menu-item";
      itemCard.dataset.searchText = [
        category.name,
        item.name,
        item.focus || "",
        item.description || "",
        ...(item.tags || [])
      ]
        .join(" ")
        .toLowerCase();

      const info = document.createElement("div");

      const heading = document.createElement("h4");
      heading.textContent = item.name;
      info.appendChild(heading);

      if (item.description) {
        const description = document.createElement("p");
        description.textContent = item.description;
        info.appendChild(description);
      }

      const meta = document.createElement("div");
      meta.className = "menu-meta";
      if (typeof item.duration === "number") {
        const duration = document.createElement("span");
        duration.textContent = `⏱ ${item.duration}分`;
        meta.appendChild(duration);
      }
      if (item.focus) {
        const focus = document.createElement("span");
        focus.textContent = `🎯 ${item.focus}`;
        meta.appendChild(focus);
      }
      if (item.tags && item.tags.length > 0) {
        const tags = document.createElement("span");
        tags.textContent = `#${item.tags.join(" #")}`;
        meta.appendChild(tags);
      }
      info.appendChild(meta);

      const addButton = document.createElement("button");
      addButton.type = "button";
      addButton.textContent = "追加";
      addButton.addEventListener("click", () => addMenuToPlan(category, item));

      itemCard.appendChild(info);
      itemCard.appendChild(addButton);
      itemsContainer.appendChild(itemCard);
    });

    details.appendChild(summary);
    details.appendChild(itemsContainer);
    menuList.appendChild(details);
  });
}

function bindEventListeners() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (event) => filterMenu(event.target.value));

  document.getElementById("copyPlanBtn").addEventListener("click", copyPlanToClipboard);
  document.getElementById("clearPlanBtn").addEventListener("click", clearPlan);

  document
    .getElementById("customMenuForm")
    .addEventListener("submit", handleCustomMenuSubmit);
}

function filterMenu(query) {
  const normalized = (query || "").trim().toLowerCase();
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const isVisible = !normalized || item.dataset.searchText.includes(normalized);
    item.style.display = isVisible ? "grid" : "none";
  });

  document.querySelectorAll(".category-card").forEach((card) => {
    const hasVisibleItem = Array.from(card.querySelectorAll(".menu-item")).some(
      (item) => item.style.display !== "none"
    );
    card.style.display = hasVisibleItem ? "block" : "none";
  });
}

function addMenuToPlan(category, item) {
  const addedItem = planStore.addMenuItem(category, item);
  renderPlan();
  savePlan();
  showToast(`${addedItem.name} をプランに追加しました。`);
}

function handleCustomMenuSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const category = form.category.value.trim();
  const name = form.name.value.trim();
  const durationValue = form.duration.value.trim();
  const notes = form.notes.value.trim();

  if (!category || !name) {
    showToast("カテゴリとメニュー名を入力してください。");
    return;
  }

  planStore.addCustomItem({
    category,
    name,
    duration: durationValue,
    notes
  });
  renderPlan();
  savePlan();
  showToast("カスタムメニューを追加しました。");
  form.reset();
}

function renderPlan() {
  const planList = document.getElementById("planList");
  planList.innerHTML = "";
  const currentPlan = planStore.getPlan();

  currentPlan.forEach((item, index) => {
    const row = document.createElement("tr");
    row.dataset.id = String(item.id);

    const orderCell = document.createElement("td");
    orderCell.textContent = String(index + 1);
    row.appendChild(orderCell);

    const startCell = document.createElement("td");
    const startInput = document.createElement("input");
    startInput.type = "time";
    startInput.value = item.startTime || "";
    startInput.addEventListener("change", (event) =>
      updatePlanItem(item.id, "startTime", event.target.value)
    );
    startCell.appendChild(startInput);
    row.appendChild(startCell);

    const durationCell = document.createElement("td");
    const durationInput = document.createElement("input");
    durationInput.type = "number";
    durationInput.min = "0";
    durationInput.step = "5";
    if (item.duration !== "") {
      durationInput.value = String(item.duration);
    }
    durationInput.addEventListener("input", (event) =>
      updatePlanItem(item.id, "duration", event.target.value)
    );
    durationCell.appendChild(durationInput);
    row.appendChild(durationCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = item.category;
    row.appendChild(categoryCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const noteCell = document.createElement("td");
    const noteInput = document.createElement("input");
    noteInput.type = "text";
    noteInput.placeholder = "ポイントや担当など";
    noteInput.value = item.notes || "";
    noteInput.addEventListener("input", (event) =>
      updatePlanItem(item.id, "notes", event.target.value)
    );
    noteCell.appendChild(noteInput);
    row.appendChild(noteCell);

    const actionCell = document.createElement("td");
    actionCell.className = "action-column";
    const actions = document.createElement("div");
    actions.className = "action-buttons";

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "icon-btn";
    upButton.innerHTML = "▲";
    upButton.title = "上に移動";
    upButton.disabled = index === 0;
    upButton.addEventListener("click", () => movePlanItem(item.id, -1));

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "icon-btn";
    downButton.innerHTML = "▼";
    downButton.title = "下に移動";
    downButton.disabled = index === currentPlan.length - 1;
    downButton.addEventListener("click", () => movePlanItem(item.id, 1));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "icon-btn delete";
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => removePlanItem(item.id));

    actions.appendChild(upButton);
    actions.appendChild(downButton);
    actions.appendChild(deleteButton);
    actionCell.appendChild(actions);
    row.appendChild(actionCell);

    planList.appendChild(row);
  });

  const emptyMessage = document.getElementById("emptyMessage");
  emptyMessage.style.display = currentPlan.length === 0 ? "block" : "none";

  updatePlanSummary();
  updatePlanText();
}

function updatePlanItem(id, field, value) {
  planStore.updateItem(id, field, value);
  savePlan();
  updatePlanSummary();
  updatePlanText();
}

function movePlanItem(id, direction) {
  const moved = planStore.moveItem(id, direction);
  if (moved) {
    renderPlan();
    savePlan();
  }
}

function removePlanItem(id) {
  const removed = planStore.removeItem(id);
  if (removed) {
    renderPlan();
    savePlan();
    showToast("メニューを削除しました。");
  }
}

function clearPlan() {
  if (planStore.getPlan().length === 0) return;
  const confirmed = window.confirm("本当にすべてのメニューを削除しますか？");
  if (!confirmed) return;
  planStore.clear();
  renderPlan();
  savePlan();
  showToast("プランをリセットしました。");
}

function updatePlanSummary() {
  const summary = document.getElementById("planSummary");
  const { count, totalDuration } = planStore.getSummary();
  if (count === 0) {
    summary.textContent = "メニューを追加して今日の練習プランを作成しましょう。";
    return;
  }

  summary.textContent = `メニュー数: ${count} ／ 合計所要時間: ${totalDuration}分`;
}

function updatePlanText() {
  const textarea = document.getElementById("planText");
  textarea.value = planStore.formatPlanText();
}

function copyPlanToClipboard() {
  const textarea = document.getElementById("planText");
  if (!textarea.value) {
    showToast("コピーするプランがありません。");
    return;
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(textarea.value)
      .then(() => showToast("プランをクリップボードにコピーしました。"))
      .catch(() => fallbackCopy(textarea));
  } else {
    fallbackCopy(textarea);
  }
}

function fallbackCopy(textarea) {
  textarea.select();
  try {
    const success = document.execCommand("copy");
    showToast(success ? "プランをコピーしました。" : "コピーに失敗しました。");
  } catch (error) {
    showToast("コピー機能を利用できません。テキストを手動で選択してください。");
  } finally {
    textarea.setSelectionRange(0, 0);
    textarea.blur();
  }
}

function loadPlan() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    const loaded = planStore.loadFromStorage(parsed);
    if (loaded && document.readyState !== "loading") {
      renderPlan();
    } else if (loaded) {
      document.addEventListener("DOMContentLoaded", () => renderPlan(), {
        once: true
      });
    }
  } catch (error) {
    console.error("プランの読み込みに失敗しました", error);
  }
}

function savePlan() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(planStore.toJSON()));
  } catch (error) {
    console.error("プランの保存に失敗しました", error);
  }
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function getPlanSnapshot() {
  return planStore.getPlan();
}

function resetPlanState() {
  planStore.clear();
  if (typeof document !== "undefined" && document.getElementById("planList")) {
    renderPlan();
  }
  savePlan();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("プランのリセット保存に失敗しました", error);
  }
}

const plannerAPI = {
  menuCategories,
  planStore,
  renderMenu,
  bindEventListeners,
  filterMenu,
  addMenuToPlan,
  handleCustomMenuSubmit,
  renderPlan,
  updatePlanItem,
  movePlanItem,
  removePlanItem,
  clearPlan,
  updatePlanSummary,
  updatePlanText,
  copyPlanToClipboard,
  fallbackCopy,
  loadPlan,
  savePlan,
  showToast,
  getPlanSnapshot,
  resetPlanState
};

if (typeof window !== "undefined") {
  window.__planner = plannerAPI;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = plannerAPI;
}