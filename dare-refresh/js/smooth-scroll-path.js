AFRAME.registerComponent('alongpath-scroll', {
    schema: { curve: { default: '[curve]' }, 
    }, 
    init() {
        console.log("init");
        
        this.curve = document.querySelector(this.data.curve);
        // var hello = document.querySelector(this.data.curve).components;
        // console.log(hello.curve);
        document.addEventListener('scroll', (e) => {
            // console.log("scroll");
            this.onscroll();
        });
        
    }, onscroll() {
        
        // console.log("doing scroll thing", this._get_scroll_percentage())
        const newPos = this.curve.components.curve.curve.getPoint(this._get_scroll_percentage())
        // console.log(newPos);
        this.el.setAttribute('position', newPos);

    }, _get_window_height: function () { 
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0 
    },
    _get_window_Yscroll() { 
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0 
    },
    _get_doc_height() { 
        return Math.max(document.body.scrollHeight || 0, document.documentElement.scrollHeight || 0, document.body.offsetHeight || 0, document.documentElement.offsetHeight || 0, document.body.clientHeight || 0, document.documentElement.clientHeight || 0) 
    },
    _get_scroll_percentage() { 
        return ((this._get_window_Yscroll() + this._get_window_height()) / this._get_doc_height()) 
    },
})