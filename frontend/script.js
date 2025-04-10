async function fetchMessage() {
  const res = await fetch('/api/hello');
  const data = await res.json();
  document.getElementById('message').innerText = data.message;
}