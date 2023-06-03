AFRAME.registerComponent('model-opacity', {
    schema: {default: 1.0},
    init: function () {
        // console.log("Loaded");
    //   this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update: function () {
        // console.log("UPDATE EVE");
      var mesh = this.el.getObject3D('mesh');
      var data = this.data;
      if (!mesh) { return; }
      mesh.traverse(function (node) {
        // console.log("THIS IS A MESH");
        if (node.isMesh) {
          node.material.opacity = data;
          node.material.transparent = data < 1.0;
          node.material.needsUpdate = true;
        }
      });
    }
  });





//   scrolling


