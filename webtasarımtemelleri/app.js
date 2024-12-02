function calculateLifeStats() {
    // Get the user's birth date from the input field
    const dob = document.getElementById("dob").value;
  
    // Check if the date is entered
    if (!dob) {
      alert("Lütfen doğum tarihinizi girin.");
      return;
    }
  
    // Convert the entered birth date to a Date object
    const birthDate = new Date(dob);
    const today = new Date();
  
    // Calculate the years of age
    let years = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    // Adjust years if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      years--;
    }
  
    // Calculate months and days
    let months = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0) {
      months += 12;
    }
  
    let days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  
    // Display the results
    document.getElementById("result").innerHTML = `
      Yaşınız: ${years} yıl, ${months} ay, ${days} gün
    `;
  }
  
  
  