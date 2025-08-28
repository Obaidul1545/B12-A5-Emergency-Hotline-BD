// heart icon clicking card will increase the count in the Navbar functionality
let count = 0;
const navHeartCount = document.getElementById('navbar-count');
const heartIcons = document.getElementsByClassName('heart-icon');
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener('click', function () {
    count++;
    navHeartCount.innerText = count;
  });
}

// On clicking a card's Call Button functionality

const callBtns = document.getElementsByClassName('call-btn');
let showCoins = document.getElementById('coins');
for (const callBtn of callBtns) {
  callBtn.addEventListener('click', function () {
    const title = callBtn.parentNode.parentNode.children[1].innerText;
    const subTitle = callBtn.parentNode.parentNode.children[2].innerText;
    const callingNumber = callBtn.parentNode.parentNode.children[3].innerText;
    let coins = Number(showCoins.innerText);
    if (coins < 20) {
      alert('⚠ Not enough coins');
      return;
    }
    coins = coins - 20;
    showCoins.innerText = coins;
    alert(`📞 Calling ${subTitle} ${callingNumber}...`);
    const date = new Date();
    const callHistory = document.getElementById('calling-history');
    const addHistoryContainer = document.createElement('div');
    addHistoryContainer.innerHTML = `
    <div class="p-4 bg-[#fafafa] rounded-lg">
              <p class="text-lg font-semibold text-black">${title}</p>
              <div class="flex justify-between items-center">
                <span class="text-base font-normal text-[#5C5C5C]">${callingNumber}</span>
                <p class="text-base font-normal text-[#5C5C5C]">${date.toLocaleString()}</p>
              </div>
            </div>
    `;
    callHistory.append(addHistoryContainer);
  });
}

// Clicking this button will remove all data from call history
document
  .getElementById('history-clear-btn')
  .addEventListener('click', function () {
    const callHistory = document.getElementById('calling-history');
    callHistory.innerText = '';
  });
