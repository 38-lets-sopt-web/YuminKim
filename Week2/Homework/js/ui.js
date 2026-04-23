export function renderTable(list, tableBody) {
  tableBody.innerHTML = "";

  list.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><input type="checkbox" class="row-check" data-id="${item.id}" /></td>
      <td>${item.title}</td>
      <td class="${item.amount >= 0 ? "income" : "expense"}">
        ${formatAmount(item.amount)}
      </td>
      <td>${item.date}</td>
      <td>${item.category}</td>
      <td>${item.payment}</td>
    `;

    tableBody.appendChild(tr);
  });
}

export function renderTotal(list, totalEl) {
  const total = list.reduce((sum, item) => sum + item.amount, 0);
  totalEl.textContent = `total: ${formatAmount(total)}`;
}

function formatAmount(amount) {
  const sign = amount > 0 ? "+" : "";
  return `${sign}${amount.toLocaleString()}`;
}
