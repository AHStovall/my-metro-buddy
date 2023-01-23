const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username').value.trim();
    const start_time = document.querySelector('#start-time').value.trim();
    const nearest_station = document.querySelector('#nearest-station').value.trim();
  
    if (name && start_time && nearest_station) {
      const response = await fetch(`/api/trips`, {
        method: 'POST',
        body: JSON.stringify({ name, start_time, nearest_station }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/mymetro');
      } else {
        alert('Failed to create trip');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/trip/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/mymetro');
      } else {
        alert('Failed to delete trip');
      }
    }
  };
  
  document
    .querySelector('.new-trip-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.trip-list')
    .addEventListener('click', delButtonHandler);
  