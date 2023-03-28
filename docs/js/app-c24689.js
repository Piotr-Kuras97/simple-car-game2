!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var s=0;s<i.length;s++){var n=i[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,"string");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===t(o)?o:String(o)),n)}var o}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.road=document.querySelector(".road"),this.car=document.querySelector("svg"),this.score=document.querySelector(".points"),this.gamePanel=document.querySelector(".panel"),this.playBtn=document.querySelector(".panel__play"),this.soundDrive=document.querySelector(".drive-sound"),this.soundCrash=document.querySelector(".crash-sound"),this.bgAnim=document.querySelector(".bg"),this.soundCrash.volume=.1,this.points=0,this.carLeft=this.car.getBoundingClientRect().left,this.carTop=this.car.getBoundingClientRect().top,this.canvas=e,this.ctx=e.getContext("2d"),this.width=window.innerWidth,this.height=this.road.offsetHeight,this.animateId=0,this.flag=!0,this.posY=0}var i,s;return i=t,(s=[{key:"clearCanvas",value:function(){this.ctx.fillStyle="#333333",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="darkgoldenrod",this.ctx.lineWidth=15,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.width,0),this.ctx.moveTo(0,this.height),this.ctx.lineTo(this.width,this.height),this.ctx.stroke()}},{key:"initCanvas",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.ctx.fillStyle="#333333",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="darkgoldenrod",this.ctx.lineWidth=15,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.width,0),this.ctx.moveTo(0,this.height),this.ctx.lineTo(this.width,this.height),this.ctx.stroke()}},{key:"numbersOfLines",value:function(){var t=0;return 150*t<this.width&&(t=Math.floor(this.width/150)+1),t}},{key:"generateLines",value:function(t){for(var e=[],i=0;i<t;i++)e.push({x:150*i,y:this.height/2-12.5,color:"white",speedX:-5});this.lines=e}},{key:"drawLine",value:function(t){this.ctx.fillStyle="white",this.ctx.fillRect(t.x,t.y,100,25)}},{key:"drawLines",value:function(){var t=this;this.lines.forEach((function(e){t.drawLine(e)}))}},{key:"updateLines",value:function(){var t=this;this.lines.forEach((function(e){e.x+=e.speedX,e.x+100<0&&(e.x=t.width)}))}},{key:"generateObstacle",value:function(t){for(var e=[],i=0;i<t;i++)e.push({x:1e3*i+500,y:Math.random()*this.height,size:50,color:"gray",speedX:-5});this.obstacles=e}},{key:"updateObstacles",value:function(){var t=this;this.obstacles.forEach((function(e){e.x+=e.speedX,e.x+100<0&&(e.x=t.width+100*Math.floor(2*Math.random()),e.y=Math.random()*t.height)}))}},{key:"drawObstacle",value:function(t){this.ctx.fillStyle="yellow",this.ctx.fillRect(t.x,t.y,t.size,t.size),this.ctx.strokeStyle="red",this.ctx.lineWidth=2,this.ctx.strokeRect(t.x,t.y,50,50),this.ctx.strokeStyle="#ff0000",this.ctx.lineWidth=2;var e=Math.min(t.size,30),i=t.x+(t.size-e)/2,s=t.y+(t.size-e)/2;this.ctx.beginPath(),this.ctx.moveTo(i,s),this.ctx.lineTo(i+e,s+e),this.ctx.moveTo(i,s+e),this.ctx.lineTo(i+e,s),this.ctx.stroke()}},{key:"drawObstacles",value:function(){var t=this;this.obstacles.forEach((function(e){t.drawObstacle(e)}))}},{key:"move",value:function(){var t=this;this.carMove=function(e){if("ArrowUp"===e.code){if(t.road.getBoundingClientRect().top>t.car.getBoundingClientRect().top+25)return;t.posY=t.posY-10,TweenMax.to(t.car,.05,{y:t.posY})}if("ArrowDown"===e.code){if(t.car.getBoundingClientRect().top+70>window.innerHeight)return;t.posY=t.posY+10,TweenMax.to(t.car,.05,{y:t.posY})}},window.addEventListener("keydown",this.carMove)}},{key:"fasterMoving",value:function(){var t=this;this.fasterId=setInterval((function(){t.lines.forEach((function(t){-10!==t.speedX&&t.speedX--})),t.obstacles.forEach((function(t){-10!==t.speedX&&t.speedX--}))}),1e4)}},{key:"scorePoints",value:function(){var t=this;this.intervalId=setInterval((function(){t.points=t.points+10,t.score.textContent=t.points}),1e3)}},{key:"stopGame",value:function(){for(var t=0;t<this.obstacles.length;t++)Math.floor(this.obstacles[t].x)<Math.floor(this.car.getBoundingClientRect().left+70)&&this.posY+this.obstacles[t].size>Math.floor(this.obstacles[t].y)&&Math.floor(this.obstacles[t].y)-this.posY+this.obstacles[0].size-90<0&&Math.floor(this.obstacles[t].y)-this.posY+this.obstacles[t].size-90>-70&&(console.log(Math.floor(this.obstacles[0].y)-this.posY+this.obstacles[0].size-90),cancelAnimationFrame(this.animateId),this.flag=!0,this.points=0,clearInterval(this.intervalId),clearInterval(this.fasterId),window.removeEventListener("keydown",this.carMove),this.playBtn.textContent="Try again!",this.gamePanel.style.opacity=1,this.soundDrive.pause(),this.soundDrive.currentTime=0,this.soundCrash.play(),this.bgAnim.style.animationPlayState="paused")}},{key:"draw",value:function(){this.clearCanvas(),this.drawLines(),this.updateLines(),this.drawObstacles(),this.updateObstacles(),this.animateId=window.requestAnimationFrame(this.draw.bind(this)),this.stopGame()}},{key:"run",value:function(){this.initCanvas(),this.generateLines(this.numbersOfLines()),this.generateObstacle(5),this.draw(),this.move(),this.fasterMoving(),this.scorePoints(),this.score.textContent=0,this.flag=!1}}])&&e(i.prototype,s),Object.defineProperty(i,"prototype",{writable:!1}),t}(),s=document.querySelector(".panel__play"),n=document.querySelector(".panel"),o=document.querySelector(".song"),a=document.querySelector(".drive-sound");a.volume=.1;var r=document.querySelector(".crash-sound"),c=document.querySelector(".bg"),h=new i(document.querySelector("canvas"));s.addEventListener("click",(function(){h.flag&&(h.run(),n.style.opacity=0,a.play(),o.play(),r.pause(),r.currentTime=0,c.style.animationPlayState="running")})),window.onload=function(){var t=new i(document.querySelector("canvas"));t.initCanvas(),t.generateLines(t.numbersOfLines()),t.drawLines()};var l=document.querySelector(".volume__on"),u=document.querySelector(".volume__off"),d=document.querySelectorAll("audio");l.addEventListener("click",(function(){d.forEach((function(t){t.muted=!0})),l.style.display="none",u.style.display="block"})),u.addEventListener("click",(function(){d.forEach((function(t){t.muted=!1})),l.style.display="block",u.style.display="none"}));var f=document.querySelector(".st1"),y=document.getElementById("color-select");y.addEventListener("change",(function(t){var e=y.value;f.style.fill=e}))}();