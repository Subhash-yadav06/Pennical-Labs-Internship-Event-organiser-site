document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-event-form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const eventName = document.getElementById('event-name').value;
      const eventDate = document.getElementById('event-date').value;
      const eventLocation = document.getElementById('event-location').value;
      const eventDescription = document.getElementById('event-description').value;

      const newEvent = document.createElement('div');
      newEvent.classList.add('event');
      newEvent.innerHTML = `
          <h3>${eventName}</h3>
          <p>Date: ${eventDate}</p>
          <p>Location: ${eventLocation}</p>
          <p>Description: ${eventDescription}</p>
      `;

      const eventsList = document.getElementById('events-list');
      eventsList.insertBefore(newEvent, eventsList.firstChild);

      form.reset();
  });
});
