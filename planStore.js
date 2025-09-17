(function (global) {
  function clonePlanItem(item) {
    return {
      id: item.id,
      category: item.category,
      name: item.name,
      duration: typeof item.duration === "number" ? item.duration : "",
      startTime: item.startTime || "",
      notes: item.notes || ""
    };
  }

  function parseDuration(value) {
    if (value === "" || value === null || value === undefined) {
      return "";
    }
    const number = Number(value);
    return Number.isFinite(number) ? number : "";
  }

  function createPlanStore(initialItems = [], initialNextId) {
    let plan = initialItems.map(clonePlanItem);
    let nextId =
      typeof initialNextId === "number" && initialNextId > 0
        ? initialNextId
        : plan.reduce((max, item) => Math.max(max, item.id || 0), 0) + 1;

    function addMenuItem(category, menuItem) {
      const newItem = {
        id: nextId++,
        category: category.name,
        name: menuItem.name,
        duration: typeof menuItem.duration === "number" ? menuItem.duration : "",
        startTime: "",
        notes: menuItem.focus ? menuItem.focus : ""
      };
      plan = [...plan, newItem];
      return clonePlanItem(newItem);
    }

    function addCustomItem({ category, name, duration, notes }) {
      const newItem = {
        id: nextId++,
        category,
        name,
        duration: parseDuration(duration),
        startTime: "",
        notes: notes || ""
      };
      plan = [...plan, newItem];
      return clonePlanItem(newItem);
    }

    function updateItem(id, field, value) {
      let updatedItem = null;
      plan = plan.map((item) => {
        if (item.id !== id) {
          return item;
        }
        const updated = { ...item };
        if (field === "duration") {
          updated.duration = parseDuration(value);
        } else if (field === "startTime") {
          updated.startTime = value || "";
        } else if (field === "notes") {
          updated.notes = value || "";
        } else {
          updated[field] = value;
        }
        updatedItem = updated;
        return updated;
      });
      return updatedItem ? clonePlanItem(updatedItem) : null;
    }

    function moveItem(id, direction) {
      const index = plan.findIndex((item) => item.id === id);
      if (index < 0) return false;
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= plan.length) return false;
      const updated = [...plan];
      const [moved] = updated.splice(index, 1);
      updated.splice(newIndex, 0, moved);
      plan = updated;
      return true;
    }

    function removeItem(id) {
      const originalLength = plan.length;
      plan = plan.filter((item) => item.id !== id);
      return plan.length !== originalLength;
    }

    function clear() {
      plan = [];
      nextId = 1;
    }

    function getPlan() {
      return plan.map(clonePlanItem);
    }

    function getSummary() {
      const totalDuration = plan.reduce((sum, item) => {
        return sum + (typeof item.duration === "number" ? item.duration : 0);
      }, 0);
      return { count: plan.length, totalDuration };
    }

    function formatPlanText() {
      if (plan.length === 0) return "";
      const lines = plan.map((item, index) => {
        const order = index + 1;
        const timeText = item.startTime ? `${item.startTime}〜 ` : "";
        const durationText = item.duration !== "" ? `${item.duration}分` : "時間未設定";
        const noteText = item.notes ? `【メモ】${item.notes}` : "";
        return `${order}. [${item.category}] ${item.name} ／ ${timeText}${durationText} ${noteText}`.trim();
      });
      return `【本日の練習プラン】\n${lines.join("\n")}`;
    }

    function toJSON() {
      return plan.map(clonePlanItem);
    }

    function loadFromStorage(items) {
      if (!Array.isArray(items)) return false;
      plan = items.map(clonePlanItem);
      const maxId = plan.reduce((max, item) => Math.max(max, item.id || 0), 0);
      nextId = Math.max(maxId + 1, 1);
      return true;
    }

    function importState(items, nextIdValue) {
      plan = items.map(clonePlanItem);
      const maxId = plan.reduce((max, item) => Math.max(max, item.id || 0), 0);
      const candidate = typeof nextIdValue === "number" ? nextIdValue : maxId + 1;
      nextId = Math.max(candidate, maxId + 1);
    }

    return {
      addMenuItem,
      addCustomItem,
      updateItem,
      moveItem,
      removeItem,
      clear,
      getPlan,
      getSummary,
      formatPlanText,
      toJSON,
      loadFromStorage,
      importState
    };
  }

  const api = {
    createPlanStore
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (global) {
    global.createPlanStore = createPlanStore;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);