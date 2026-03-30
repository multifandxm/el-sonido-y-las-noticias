    let locucion1muted = document.getElementById('locucion-1').muted
    function muteLocucion1() {
        document.getElementById("locucion-1").muted = locucion1muted = !locucion1muted;
        document.getElementById("locucion1Button").style = !locucion1muted ? "background-color:green" : "#B3C9D6";
      }

      let locucion2muted = document.getElementById('locucion-2').muted

      document.getElementById("locucion1Button").style = !locucion1muted ? "background-color:green" : "";
      document.getElementById("locucion2Button").style = !locucion2muted ? "background-color:green" : "";

      function muteLocucion2() {
        document.getElementById("locucion-2").muted = locucion2muted = !locucion2muted;
        document.getElementById("locucion2Button").style = !locucion2muted ? "background-color:green" : "#B3C9D6";
      } 

      let voces1Player = document.getElementById("locucion-2")
      let voces2Player = document.getElementById("locucion-1")

    

      let ambiente1muted = document.getElementById('ambiente-1').muted
    function muteAmbiente1() {
        document.getElementById("ambiente-1").muted = ambiente1muted = !ambiente1muted;
        document.getElementById("ambiente1Button").style = !ambiente1muted ? "background-color:green" : "#B3C9D6";
      }

      let ambiente2muted = document.getElementById('ambiente-2').muted

      document.getElementById("ambiente1Button").style = !ambiente1muted ? "background-color:green" : "";
      document.getElementById("ambiente2Button").style = !ambiente2muted ? "background-color:green" : "";

      function muteAmbiente2() {
        document.getElementById("ambiente-2").muted = ambiente2muted = !ambiente2muted;
        document.getElementById("ambiente2Button").style = !ambiente2muted ? "background-color:green" : "#B3C9D6";
      } 

      let ambiente1Player = document.getElementById("ambiente-2")
      let ambiente2Player = document.getElementById("ambiente-1")



      let musica1muted = document.getElementById('musica-1').muted
    function muteMusica1() {
        document.getElementById("musica-1").muted = musica1muted = !musica1muted;
        document.getElementById("musica1Button").style = !musica1muted ? "background-color:green" : "#B3C9D6";
      }

      let musica2muted = document.getElementById('musica-2').muted

      document.getElementById("musica1Button").style = !musica1muted ? "background-color:green" : "";
      document.getElementById("musica2Button").style = !musica2muted ? "background-color:green" : "";

      function muteMusica2() {
        document.getElementById("musica-2").muted = musica2muted = !musica2muted;
        document.getElementById("musica2Button").style = !musica2muted ? "background-color:green" : "#B3C9D6";
      } 

      let musica1Player = document.getElementById("musica-2")
      let musica2Player = document.getElementById("musica-1")

      let musica3muted = document.getElementById('musica-3').muted
    function muteMusica3() {
        document.getElementById("musica-3").muted = musica3muted = !musica3muted;
        document.getElementById("musica3Button").style = !musica3muted ? "background-color:green" : "#B3C9D6";
      }

      let musica4muted = document.getElementById('musica-4').muted

      document.getElementById("musica3Button").style = !musica3muted ? "background-color:green" : "";
      document.getElementById("musica4Button").style = !musica4muted ? "background-color:green" : "";

      function muteMusica4() {
        document.getElementById("musica-4").muted = musica4muted = !musica4muted;
        document.getElementById("musica4Button").style = !musica4muted ? "background-color:green" : "#B3C9D6";
      } 

      let musica3Player = document.getElementById("musica-4")
      let musica4Player = document.getElementById("musica-3")

    

      function normalizeVolume(value) {
        const min = -60
        const max = 24
        return (value - min) / (max - min)
      }
      function controlVolume(newVolume) {
        let volume = normalizeVolume(newVolume)
        voces1Player.volume = volume;
        voces2Player.volume = volume;

        ambiente1Player.volume = volume;
        ambiente2Player.volume = volume;

        musica1Player.volume = volume;
        musica2Player.volume = volume;
        musica3Player.volume = volume;
        musica4Player.volume = volume;
      }