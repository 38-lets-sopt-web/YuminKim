import { expenses } from "./data.js";
import { renderTable, renderTotal } from "./ui.js";

const STORAGE_KEY = "expenseData";

// DOM
const tableBody = document.getElementById("tableBody");
const totalEl = document.getElementById("total");

const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const checkAll = document.getElementById("checkAll");

const sortSelect = document.getElementById("sortSelect");

const titleInput = document.getElementById("titleInput");
const typeSelect = document.getElementById("typeSelect");
const categorySelect = document.getElementById("categorySelect");
const paymentSelect = document.getElementById("paymentSelect");

const applyBtn = document.querySelector(".apply-btn");
const resetBtn = document.querySelector(".reset-btn");

// 모달
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");
const modalForm = document.getElementById("modalForm");

const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalAmount = document.getElementById("modalAmount");
const modalDate = document.getElementById("modalDate");
const modalCategory = document.getElementById("modalCategory");
const modalPayment = document.getElementById("modalPayment");

// 상태
let expenseList = getExpenseData();

let filters = {
  title: "",
  type: "",
  category: "",
  payment: "",
};

// localStorage
function getExpenseData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return [...expenses];
  }

  return JSON.parse(saved);
}

function saveExpenseData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenseList));
}

// 필터 + 정렬
function getFilteredList() {
  let list = [...expenseList];

  if (filters.title) {
    list = list.filter((item) =>
      item.title.toLowerCase().includes(filters.title.toLowerCase()),
    );
  }

  if (filters.type) {
    list = list.filter((item) =>
      filters.type === "income" ? item.amount >= 0 : item.amount < 0,
    );
  }

  if (filters.category) {
    list = list.filter((item) => item.category === filters.category);
  }

  if (filters.payment) {
    list = list.filter((item) => item.payment === filters.payment);
  }

  if (sortSelect.value === "latest") {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    list.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return list;
}

// 렌더링
function updateUI() {
  const list = getFilteredList();
  renderTable(list, tableBody);
  renderTotal(list, totalEl);
}

// 삭제
function deleteSelected() {
  const checked = document.querySelectorAll(".row-check:checked");
  const ids = [...checked].map((el) => Number(el.dataset.id));

  if (ids.length === 0) {
    alert("삭제할 항목을 선택해주세요.");
    return;
  }

  expenseList = expenseList.filter((item) => !ids.includes(item.id));
  saveExpenseData();
  updateUI();
}

// 체크박스 전체 선택
function handleCheckAll() {
  const checks = document.querySelectorAll(".row-check");
  checks.forEach((c) => (c.checked = checkAll.checked));
}

// 필터
function applyFilters() {
  filters.title = titleInput.value.trim();
  filters.type = typeSelect.value;
  filters.category = categorySelect.value;
  filters.payment = paymentSelect.value;

  updateUI();
}

function resetFilters() {
  titleInput.value = "";
  typeSelect.value = "";
  categorySelect.value = "";
  paymentSelect.value = "";

  filters = {
    title: "",
    type: "",
    category: "",
    payment: "",
  };

  updateUI();
}

// 모달
function openModal() {
  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalForm.reset();
}

// 추가
function handleAdd(e) {
  e.preventDefault();

  const title = modalTitle.value.trim();
  const type = modalType.value;
  const amount = modalAmount.value;
  const date = modalDate.value;
  const category = modalCategory.value;
  const payment = modalPayment.value;

  if (!title || !type || !amount || !date || !category || !payment) {
    alert("모든 항목 입력해주세요");
    return;
  }

  const newItem = {
    id: Date.now(),
    title,
    date,
    category,
    payment,
    amount:
      type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount)),
  };

  expenseList.push(newItem);
  saveExpenseData();
  updateUI();
  closeModal();
}

// 이벤트
addBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalForm.addEventListener("submit", handleAdd);

deleteBtn.addEventListener("click", deleteSelected);
checkAll.addEventListener("change", handleCheckAll);

applyBtn.addEventListener("click", applyFilters);
resetBtn.addEventListener("click", resetFilters);

sortSelect.addEventListener("change", updateUI);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// 최초 실행
updateUI();
