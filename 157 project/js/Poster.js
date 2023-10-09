AFRAME.registerComponent("poster", {
  init: function () {
    this.placesContainer = this.el;
    this.createPoster()
  },

  createPoster: function () {
    const thumbNailsRef = [
      {
        id: "img1",
        url: "./assets/thumbnails/img1.jpg",
      },
      {
        id: "img2",
        url: "./assets/thumbnails/img2.jpg",
      },

      {
        id: "img3",
        url: "./assets/thumbnails/img3.jpg",
      },
      {
        id: "img4",
        url: "./assets/thumbnails/img4.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      //const titleEl = this.createTitleEl(position,item)
      //borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);

    }
  },
  createBorder: function(position,id){
    const entity_el = document.createElement("a-entity")
    entity_el.setAttribute("id",id)
    entity_el.setAttribute("visible",true)
    entity_el.setAttribute("geometry",{
      primitive:"plane",width:20,height:28

    })
    entity_el.setAttribute("position",position)
    entity_el.setAttribute("material",{
      color:"white",
      opacity:0.1

    })
    return entity_el
  },

  createThumbnail: function(item){
    const entity_el = document.createElement("a-entity")
    
    entity_el.setAttribute("visible",true)
    entity_el.setAttribute("geometry",{
      primitive:"plane",width:20,height:28

    })
    
    entity_el.setAttribute("material",{
      src:item.url

    })
    return entity_el
  },

  /*createTitleEl: function(position,item){
    const entity_el = document.createElement("a-entity")
    entity_el.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width: 60,
      color:"blue",
      value:item.title
      
    })
    entity_el.setAttribute("visible",true)
    const pos = position
    pos.y = -20
    entity_el.setAttribute("position",pos)
    
    return entity_el
  }*/
  
});
