    let locucion1muted = document.getElementById('locucion-1').muted
    function muteLocucion1() {
        document.getElementById("locucion-1").muted = locucion1muted = !locucion1muted;
        document.getElementById("locucion1Button").style = !locucion1muted ? "background-color:#8da750" : "#B3C9D6";
      }

      let locucion2muted = document.getElementById('locucion-2').muted

      document.getElementById("locucion1Button").style = !locucion1muted ? "background-color:#8da750" : "";
      document.getElementById("locucion2Button").style = !locucion2muted ? "background-color:#8da750" : "";

      function muteLocucion2() {
        document.getElementById("locucion-2").muted = locucion2muted = !locucion2muted;
        document.getElementById("locucion2Button").style = !locucion2muted ? "background-color:#8da750" : "#B3C9D6";
      } 

      let locu2 = document.getElementById("locucion-2")
      let locu1 = document.getElementById("locucion-1")

      let ambiente1muted = document.getElementById('ambiente-1').muted
    function muteAmbiente1() {
        document.getElementById("ambiente-1").muted = ambiente1muted = !ambiente1muted;
        document.getElementById("ambiente1Button").style = !ambiente1muted ? "background-color:#8da750" : "#B3C9D6";
      }

      let ambiente2muted = document.getElementById('ambiente-2').muted

      document.getElementById("ambiente1Button").style = !ambiente1muted ? "background-color:#8da750" : "";
      document.getElementById("ambiente2Button").style = !ambiente2muted ? "background-color:#8da750" : "";

      function muteAmbiente2() {
        document.getElementById("ambiente-2").muted = ambiente2muted = !ambiente2muted;
        document.getElementById("ambiente2Button").style = !ambiente2muted ? "background-color:#8da750" : "#B3C9D6";
      } 

      let ambiente2 = document.getElementById("ambiente-2")
      let ambiente1 = document.getElementById("ambiente-1")



      let musica1muted = document.getElementById('musica-1').muted
    function muteMusica1() {
        document.getElementById("musica-1").muted = musica1muted = !musica1muted;
        document.getElementById("musica1Button").style = !musica1muted ? "background-color:#8da750" : "#B3C9D6";
      }

      let musica2muted = document.getElementById('musica-2').muted

      document.getElementById("musica1Button").style = !musica1muted ? "background-color:#8da750" : "";
      document.getElementById("musica2Button").style = !musica2muted ? "background-color:#8da750" : "";

      function muteMusica2() {
        document.getElementById("musica-2").muted = musica2muted = !musica2muted;
        document.getElementById("musica2Button").style = !musica2muted ? "background-color:#8da750" : "#B3C9D6";
      } 

      let musica2 = document.getElementById("musica-2")
      let musica1 = document.getElementById("musica-1")

      let musica3muted = document.getElementById('musica-3').muted
    function muteMusica3() {
        document.getElementById("musica-3").muted = musica3muted = !musica3muted;
        document.getElementById("musica3Button").style = !musica3muted ? "background-color:#8da750" : "#B3C9D6";
      }

      let musica4muted = document.getElementById('musica-4').muted

      document.getElementById("musica3Button").style = !musica3muted ? "background-color:#8da750" : "";
      document.getElementById("musica4Button").style = !musica4muted ? "background-color:#8da750" : "";

      function muteMusica4() {
        document.getElementById("musica-4").muted = musica4muted = !musica4muted;
        document.getElementById("musica4Button").style = !musica4muted ? "background-color:#8da750" : "#B3C9D6";
      } 

      let musica4 = document.getElementById("musica-4")
      let musica3 = document.getElementById("musica-3")

    
//VOLUME FUNCTION

    function normalizeVolume(value) {
        const min = -60
        const max = 24
        return (value - min) / (max - min)
      }
      
      function controlVolumeLocu(newVolume) {
        let volume = normalizeVolume(newVolume)
        locu1.volume = volume;
        locu2.volume = volume;
      }
      
      function controlVolumeAmbiente(newVolume) {
        let volume = normalizeVolume(newVolume)
        ambiente1.volume = volume;
        ambiente2.volume = volume;
      }

      function controlVolumeMusica(newVolume) {
        let volume = normalizeVolume(newVolume)
        musica1.volume = volume;
        musica2.volume = volume;
        musica3.volume = volume;
        musica4.volume = volume;
      }

//slider

      var slider1 = document.getElementById("volume-voice");
      var output1 = document.getElementById("value1");

      output1.innerHTML = slider1.value + " " + "dB";

      slider1.addEventListener("mousemove", function(){
          output1.innerHTML = this.value + ' ' + 'dB';

          var x = ((slider1.value - slider1.min) / (slider1.max - slider1.min) * 100);
          var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
          slider1.style.background = color;
      })


      var slider2 = document.getElementById("volume-ambient");
      var output2 = document.getElementById("value2");

      output2.innerHTML = slider2.value + ' ' + 'dB'

      slider2.addEventListener("mousemove", function(){
          output2.innerHTML = this.value + ' ' + 'dB';

          var x = ((slider2.value - slider2.min) / (slider2.max - slider2.min) * 100);
          var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
          slider2.style.background = color;
      })


      var slider3 = document.getElementById("volume-music");
      var output3 = document.getElementById("value3");

      output3.innerHTML = slider3.value + ' ' + 'dB'

      slider3.addEventListener("mousemove", function(){
          output3.innerHTML = this.value + ' ' + 'dB';

          var x = ((slider3.value - slider3.min) / (slider3.max - slider3.min) * 100);
          var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
          slider3.style.background = color;
      })
