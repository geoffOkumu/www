const checkIntersection = (element, callback) => {
  if (typeof window !== 'undefined') {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      createObserver(element, callback)
    }
  }
}

function createObserver(element, callback) {
  const observer = new IntersectionObserver(callback)
  observer.observe(element)
}

export default checkIntersection
