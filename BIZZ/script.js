window.onload = function() {
    const cartes = [
        "as-keur", "2-keur", "3-keur", "4-keur", "5-keur", "6-keur", "7-keur", "8-keur", "9-keur", "10-keur", "valet-keur", "dame-keur", "roi-keur",
        "as-caro", "2-caro", "3-caro", "4-caro", "5-caro", "6-caro", "7-caro", "8-caro", "9-caro", "10-caro", "valet-caro", "dame-caro", "roi-caro",
        "as-pik", "2-pik", "3-pik", "4-pik", "5-pik", "6-pik", "7-pik", "8-pik", "9-pik", "10-pik", "valet-pik", "dame-pik", "roi-pik",
        "as-tr", "2-tr", "3-tr", "4-tr", "5-tr", "6-tr", "7-tr", "8-tr", "9-tr", "10-tr", "valet-tr", "dame-tr", "roi-tr",
        "carte-bizz-keur", "carte-bizz-caro", "carte-bizz-pik", "carte-bizz-tr"
      ];
    
      const btnCarteSuivante = document.querySelector("#carte-suivante");
      const carteSuivanteImg = document.querySelector("#carte-suivante-img");
      const nbCartesTirees = document.querySelector("#nb-cartes-tirees");

      let cartesRestantes = [...cartes];
    
      function afficherCarteSuivante() {
        const indexCarte =  Math.floor(Math.random() * cartesRestantes.length);
        const nomCarte = cartesRestantes[indexCarte];
        const cheminImage = `cartes/${nomCarte}.png`;
        console.log("Nom de l'image :", nomCarte, "Chemin de l'image :", cheminImage);
        carteSuivanteImg.innerHTML = `<img src="${cheminImage}"/>`;
      
        cartesRestantes.splice(indexCarte, 1);
    
        nbCartesTirees.textContent = `Cartes tirées : ${cartes.length - cartesRestantes.length}`;
        if (cartesRestantes.length === 0) {
            nbCartesTirees.textContent = "Jeu de cartes terminé !";
          }
          const action = getActionFromCarte(nomCarte);
          const p = document.createElement("p");
          p.textContent = action;
          document.body.appendChild(p);
        }

        function getActionFromCarte(nomCarte) {
          switch(nomCarte) {
            case "as-keur":
            case "as-caro":
            case "as-pik":
            case "as-tr":
            case "2-keur":
            case "2-caro":
            case "2-pik":
            case "2-tr":
            case "3-keur":
            case "3-caro":
            case "3-pik":
            case "3-tr":
            case "4-keur":
            case "4-caro":
            case "4-pik":
            case "4-tr":
            case "5-keur":
            case "5-caro":
            case "5-pik":
            case "5-tr":
              return "Turbo.";
            case "6-keur":
            case "6-caro":
            case "6-pik":
            case "6-tr":
            case "7-keur":
            case "7-caro":
            case "7-pik":
            case "7-tr":
            case "8-keur":
            case "8-caro":
            case "8-pik":
            case "8-tr":
            case "9-keur":
            case "9-caro":
            case "9-pik":
            case "9-tr":
            case "10-keur":
            case "10-caro":
            case "10-pik":
            case "10-tr":
            case "valet-keur":
            case "valet-caro":
            case "valet-pik":
            case "valet-tr":
            case "dame-keur":
            case "dame-caro":
            case "dame-pik":
            case "dame-tr":
            case "roi-keur":
            case "roi-caro":
            case "roi-pik":
            case "roi-tr":
              return "Taff.";
            case "carte-bizz-keur":
            case "carte-bizz-caro":
            case "carte-bizz-pik":
            case "carte-bizz-tr":
              return "Indienne 5 taff.";
            default:
              return "";
          }
        }
      
        btnCarteSuivante.addEventListener("click", function() {
          if (cartesRestantes.length === 0) {
            cartesRestantes = [...cartes];
          }
          afficherCarteSuivante();
        });
        
  
        afficherCarteSuivante();
  
      }


     
    