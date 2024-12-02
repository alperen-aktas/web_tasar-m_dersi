let totalDonations = 0; 
const targetAmount = 1000000000; 

function makeDonation() {
    const donationInput = document.getElementById('donation');
    const donationAmount = parseInt(donationInput.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Lütfen geçerli bir bağış miktarı girin.");
        return;
    }

    totalDonations += donationAmount; 
    if (totalDonations > targetAmount) {
        totalDonations = targetAmount; 
    }

  
    const progress = document.querySelector('.progress');
    const progressPercentage = (totalDonations / targetAmount) * 100;
    progress.style.width = progressPercentage + "%";


    document.getElementById('current-amount').innerText = `Toplam Bağış: ${totalDonations} $`;

   
    if (totalDonations >= targetAmount) {
        alert("Tebrikler! Bağış hedefi tamamlandı!");
    }

    donationInput.value = ""; 
}