import './style.css';

class DataHandler {
  constructor() {
    this.data = [];
  }

  addData(newItem) {
    if (newItem.trim() === '') {
      alert('Az új elem nem lehet üres!');
      return;
    }

    this.data.push(newItem);
    this.renderTable();
    document.getElementById('newItem').value = ''; // Input mező kiürítése
  }

  renderTable() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
          </tr>
        </thead>
        <tbody>
          ${this.data
            .map(
              (item, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${item}</td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    `;
  }
}

const handler = new DataHandler();
handler.renderTable();

document.getElementById('addItemButton').addEventListener('click', () => {
  const newItem = document.getElementById('newItem').value;
  handler.addData(newItem);
});
