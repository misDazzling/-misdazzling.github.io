var posts=["article/6b7afcc8.html","article/4873931e.html","article/ac9f297d.html","article/903d3d04.html","article/e3f27956.html","article/2a595fa5.html","article/ba6f225a.html","article/910ed97f.html","article/65be8feb.html","article/a0290e22.html","article/a997af82.html","article/f841b3c0.html","article/90aa8a04.html","article/515fbdc.html","article/3d1222c6.html","article/b4f16210.html","article/efb270a7.html","article/ecacc437.html","article/d52e23ed.html","article/87689537.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};