// Get the elements to animate
const elements = document.querySelectorAll('.crd');

// Define the options for the Intersection Observer
const thresholds = [0.2, 0.4, 0.6, 0.8]; // Array of thresholds

// Start observing each element
elements.forEach((element, index) => {
  element.dataset.index = index; // add data-index attribute to each element

  // Create new Intersection Observer for the element with specific threshold
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      // If element is in viewport, add the 'show' class to trigger the animation
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, entry.target.dataset.index * 300); // delay is based on data-index attribute
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: thresholds[index] }); // Use specific threshold

  observer.observe(element);
});