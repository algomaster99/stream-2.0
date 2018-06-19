var playerSocket = new WebSocket('ws://localhost:8000/ws/stream/');
var toggleButton = document.getElementById('toggle');

playerSocket.onmessage = function(e) {
   var data = JSON.parse(e.data);
   var label = data['label'];
   var volume = data['volume'];
   toggleButton.value == 'play' ? 'pause' : 'play';
};

playerSocket.onclose = function(e) {
  console.error('Chat socket closed unexpectedly');
};

toggleButton.addEventListener('click', function(){
  let value = toggleButton.value;
  playerSocket.send(JSON.stringify({
    'label': value
  }));
});
