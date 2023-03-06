AFRAME.registerComponent('dare-touch',{

    schema: {
    enabled: {default: true},
    touchEnabled: {default: true},
    hmdEnabled: {default: true},
    pointerLockEnabled: {default: false},
    reverseMouseDrag: {default: false}
    },
    init: function(){
      this.bindMethods();
    },
    tick: function (t) {
        var data = this.data;
        if (!data.enabled) { return; }
      },
    
      play: function () {
        this.addEventListeners();
      },
    
      pause: function () {
        this.removeEventListeners();
      },
    
      remove: function () {
        this.removeEventListeners();
      },
      bindMethods: function () {
        this.onTouchStart = AFRAME.utils.bind(this.onTouchStart, this);
        this.onTouchMove = AFRAME.utils.bind(this.onTouchMove, this);
        this.onTouchEnd = AFRAME.utils.bind(this.onTouchEnd, this);
        this.onPointerLockChange = AFRAME.utils.bind(this.onPointerLockChange, this);
        this.onPointerLockError = AFRAME.utils.bind(this.onPointerLockError, this);
      },
      addEventListeners: function () {
        var sceneEl = this.el.sceneEl;
        var canvasEl = sceneEl.canvas;
    
        // Wait for canvas to load.
        if (!canvasEl) {
          sceneEl.addEventListener('render-target-loaded', bind(this.addEventListeners, this));
          return;
        }
    
        // Touch events.
        canvasEl.addEventListener('touchstart', this.onTouchStart);
        window.addEventListener('touchmove', this.onTouchMove);
        window.addEventListener('touchend', this.onTouchEnd);
    
    
        // Pointer Lock events.
        if (this.data.pointerLockEnabled) {
          document.addEventListener('pointerlockchange', this.onPointerLockChange, false);
          document.addEventListener('mozpointerlockchange', this.onPointerLockChange, false);
          document.addEventListener('pointerlockerror', this.onPointerLockError, false);
        }
      },
      removeEventListeners: function () {
        var sceneEl = this.el.sceneEl;
        var canvasEl = sceneEl && sceneEl.canvas;
    
        if (!canvasEl) { return; }
    
    
        // Touch events.
        canvasEl.removeEventListener('touchstart', this.onTouchStart);
        window.removeEventListener('touchmove', this.onTouchMove);
        window.removeEventListener('touchend', this.onTouchEnd);
    
    
        // Pointer Lock events.
        document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
        document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
        document.removeEventListener('pointerlockerror', this.onPointerLockError, false);
      },
      onTouchStart: function (evt) {
        if (evt.touches.length !== 1 || !this.data.touchEnabled) { return; }
        this.touchStart = {
          x: evt.touches[0].pageX,
          y: evt.touches[0].pageY
        };
        this.touchStarted = true;
      },
    
      /**
       * Translate touch move to Y-axis rotation.
       */
      onTouchMove: function (evt) {
        var canvas = this.el.sceneEl.canvas;
        var deltaX, deltaY;
        var pitchObject = this.pitchObject;
        var yawObject = this.yawObject;
    
        if (!this.touchStarted || !this.data.touchEnabled) { return; }
    
        deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;
        deltaX = 2 * Math.PI * (evt.touches[0].pageY - this.touchStart.y) / canvas.clientHeight;
    
        // Allow touch orientaion to to x and y
        yawObject.rotation.y -= deltaY * 0.5;
        pitchObject.rotation.x -= deltaX * 0.5;
        pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
        this.touchStart = {
          x: evt.touches[0].pageX,
          y: evt.touches[0].pageY
        };
      },
      
      /**
       * Register touch end to detect release of touch drag.
       */
      onTouchEnd: function () {
        this.touchStarted = false;
      },
    

});