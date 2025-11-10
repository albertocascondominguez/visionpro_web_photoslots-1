document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('descargar')?.addEventListener('click', () => {
  const blob = new Blob([document.documentElement.outerHTML], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'apple-vision-pro.html';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});