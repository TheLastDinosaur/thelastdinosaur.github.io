/* global AFRAME */
AFRAME.registerComponent('button', {
  schema: {
    label: {default: 'label'},
    width: {default: 0.50},
    toggable: {default: false},
    func: {default: 'none'}
  },
  init: function () {
    var el = this.el;
    var labelEl = this.labelEl = document.createElement('a-entity');
    var func = this.data.func;
    this.hoverColor = '#ee9466';
    this.color = '#37d4d8';


    console.log(func);

    el.addEventListener('click', function(){
      console.log("CLICKED");
      this.setAttribute('material', {color: this.color});
      
      switch(func){
        case 'ChooseMode': ChooseMode(); break;
        case 'StartGame': StartGame(); break;
        case 'RollDice': LudoBrain(); break;
      }

    })
    el.setAttribute('geometry', {
      primitive: 'box',
      width: 3,
      height: 1.5,
      depth: 0.02
    });

    el.setAttribute('material', {color: this.color});
    el.setAttribute('pressable', '');

    labelEl.setAttribute('position', '0 0 0.01');
    labelEl.setAttribute('text', {
      value: this.data.label,
      color: '#c35b27',
      align: 'center',
    });

    labelEl.setAttribute('scale', '10 10 10');
    this.el.appendChild(labelEl);

    this.bindMethods();

    el.addEventListener('mouseenter', this.onPressedStarted);
    el.addEventListener('mouseleave', this.onPressedEnded);
  },

  bindMethods: function () {
    this.onPressedStarted = this.onPressedStarted.bind(this);
    this.onPressedEnded = this.onPressedEnded.bind(this);
  },
 

  update: function (oldData) {
    if (oldData.label !== this.data.label) {
      this.labelEl.setAttribute('text', 'value', this.data.label);
    }
  },

  onPressedStarted: function () {
    this.el.setAttribute('material', {color: this.hoverColor});
  },

  onPressedEnded: function () {
    this.el.setAttribute('material', {color: this.color});
  }
});
