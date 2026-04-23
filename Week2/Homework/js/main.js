import { expenses as initialExpenses } from "./data.js";
import { renderTable, renderTotal } from "./ui.js";

const STORAGE_KEY = "expenseData";

const tableBody = document.getElementById("tableBody");
const totalEl = document.getElementById("total");

let expenseList = getData();

function getData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) return JSON.parse(saved);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  return [...expenses];
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenseList));
}

function render() {
  renderTable(expenseList, tableBody);
  renderTotal(expenseList, totalEl);
}

render();
