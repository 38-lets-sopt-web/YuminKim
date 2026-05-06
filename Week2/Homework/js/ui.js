export function renderTable(list, tableBody) {
  tableBody.innerHTML = "";

  if (list.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6">내역이 없습니다.</td></tr>`;
    return;
  }

  list.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <input type="checkbox" class="row-check" data-id="${item.id}" />
      </td>
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
  totalEl.textContent = formatAmount(total);
}

function formatAmount(amount) {
  const sign = amount > 0 ? "+" : "";
  return `${sign}${amount.toLocaleString("ko-KR")}`;
}
