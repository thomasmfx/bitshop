export default function setScrollPosition() {
  document.documentElement.setAttribute('data-scroll', '0');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    document.documentElement.setAttribute('data-scroll', scrollY.toString());
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}
