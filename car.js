AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "./car/scene.gltf" },
      clickCounter: { type: "number", default: 0 }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 10, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      const scale={x:0.5,y:0.5,z:0.5}
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale", scale);
    },
    update: function() {
      window.addEventListener("click", e => {
        this.data.clickCounter = this.data.clickCounter + 1;
        if (this.data.clickCounter === 1) {
          const rotation = { x: 0, y: 20, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 2) {
          const rotation = { x: 0, y: 100, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 3) {
          const rotation = { x: 0, y: -200, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 4) {
          const rotation = { x: 0, y: -100, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else {
          const rotation = { x: 0, y: -100, z: 0 };
          this.el.setAttribute("rotation", rotation);
          this.data.clickCounter = 0;
        }
  });
}
})
  