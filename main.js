 function submitName() {
      var name = document.getElementById('nameInput').value.trim();
      if (name !== '') {
        document.getElementById('nameOverlay').innerText = name;
        document.getElementById('nameOverlay').style.display = 'block';
        document.getElementById('imageContainer').style.display = 'block';
        document.getElementById('enterName').style.display = 'none';
        document.getElementById('nameForm').style.display = 'none';
      } else {
        alert('Please enter your name.');
      }
    }