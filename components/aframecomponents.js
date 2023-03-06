AFRAME.registerComponent('enable-click', {
    schema: {
        event: { type: 'string', default: '' },
        message: { type: 'string', default: 'Hello, World!' },
        towhere: { type: "vec3" },
        steps: {type: 'int', default: 0}
    },
    init: function () {
        // var gamesManager = document.getElementById('game-manager');
        var self = this;
        this.eventHandlerFn = function () {
            // gameManager.emit("spawned");
            RemoveTrigger();
            var myPos = self.el.object3D.position;
            var toPos = myPos + self.data.towhere;
            console.log(self.data.towhere);
            console.log(self.el.object3D.position);
            PlayAudio('spawn');
            StopAudio('audio-time_noti');
            self.el.setAttribute('animation', {'property': 'position', 'to': self.data.towhere});
            console.log(self.el.object3D.position);
            AnotherChance();
            // gameManager.emit(self.el.id);
            // console.log(self.el.id + "is the one");
            UpdatePlayerPosition(self.el.id, 0, true);
        };
    },
    update: function (oldData) {
        var data = this.data;
        var el = this.el;

        // event updated
        if (data.event !== oldData.event) {
            //remove the existing event
            if (oldData.event) {
                el.removeEventListener(oldData.event, this.eventHandlerFn);
            }
            // Add listener for new event, if it exists.
            if (data.event) {
                el.addEventListener(data.event, this.eventHandlerFn);
            }
        }

        if (!data.event) {
            console.log(data.message + "removed");
        }

    },

    remove: function () {
        if (this.data.event) {
            this.el.removeEventListener(this.data.event, this.eventHandlerFn);
        }
    }
});

AFRAME.registerComponent('enable-moving', {
    schema: {
        event: { type: 'string', default: '' },
        steps: {type: 'int', default: 0}
    },
    init: function () {
        var self = this;
        this.eventHandlerFn = function () {
            MakeAMove(self.el.id, self.data.steps );
        };
    },
    update: function (oldData){
        var data = this.data;
        var el = this.el;

        // event updated
        if (data.event !== oldData.event) {
            //remove the existing event
            if (oldData.event) {
                el.removeEventListener(oldData.event, this.eventHandlerFn);
            }
            // Add listener for new event, if it exists.
            if (data.event) {
                el.addEventListener(data.event, this.eventHandlerFn);
            }
        }

        if (!data.event) {
            console.log(data.message + "removed");
        }
    },
    remove: function () {
        if (this.data.event) {
            this.el.removeEventListener(this.data.event, this.eventHandlerFn);
        }
    }
})