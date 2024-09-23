document.querySelectorAll('.cart-item').forEach(item => {
    const decreaseButton = item.querySelector('.decrease');
    const increaseButton = item.querySelector('.increase');
    const deleteButton = item.querySelector('.delete');
    const likeButton = item.querySelector('.like');
    const quantitySpan = item.querySelector('.quantity');
    const priceSpan = item.querySelector('.item-price');
    const totalPriceDiv = item.querySelector('.total-price');
    
    decreaseButton.addEventListener('click', function() {
      updateQuantity(-1);
    });
  
    increaseButton.addEventListener('click', function() {
      updateQuantity(1);
    });
  
    deleteButton.addEventListener('click', function() {
      item.remove();
      updateTotalPrice();
    });
  
    likeButton.addEventListener('click', function() {
      likeButton.classList.toggle('liked');
    });
  
    function updateQuantity(change) {
      const currentQuantity = parseInt(quantitySpan.textContent);
      const newQuantity = Math.max(0, currentQuantity + change);
      quantitySpan.textContent = newQuantity;
      const itemPrice = parseFloat(priceSpan.textContent);
      totalPriceDiv.textContent = (itemPrice * newQuantity).toFixed(2);
      updateTotalPrice();
    }
  });
  
  function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.total-price').forEach(price => {
      total += parseFloat(price.textContent);
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
  }
  