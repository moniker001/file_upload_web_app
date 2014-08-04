function loadfile() {
  window.rows = [];

  function load() {
    var File, reader;
    File = this.files[0];
    if (!File.name.match('\.tsv$')) {
      return;
    }
    //filename = File.name;
    //document.getElementById("test").innerHTML = filename;
    file.textContent = File.name;
    reader = new FileReader();
    reader.onload = function(file) {
      this.result.split('\n').map(function(row) {
        if (row.match(/^\d/)) {
          window.rows.push(row.split('\t'));
        }
      });
      data.textContent = this.result; //shows contents of file
    };
    reader.readAsText(File);
  };
  
  document.getElementById("chooser").style.display="none"; //makes Submit button invisible
  //link Submit button and text
  chooser.addEventListener('change', load);
  file.addEventListener('click', function() {
    chooser.click();
  });
};

function upload() {
  var xhr;

  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.readyState==4 && xhr.status==200) {
      document.getElementById("foo").innerHTML = xhr.responseText;
      var asdf = JSON.parse(xhr.responseText);
      document.querySelector("#foo").innerHTML = JSON.stringify(foo);
    }
  };


  xhr.open("GET", "data.json", true); //2nd arg is file on server  
  xhr.send();

  document.getElementById("frm1").submit();
};

function submitFunc() {
  document.getElementById("submit").innerHTML = "Submitted!"
  document.getElementById("submit").disabled = true;
  upload();
};

function resetFunc() {
  document.getElementById("file").innerHTML = "Click here to upload";
  document.getElementById("submit").innerHTML = "Submit"
  document.getElementById("submit").disabled = false;
  document.getElementById("data").innerHTML = "(File Contents)";
  loadfile();
};

loadfile();





