function SpriteSheetAnimator (bannerTools){ 

    var bt = (bannerTools)?bannerTools:new BannerTools;

    var spAnimator = {
      spritesheet: document.querySelectorAll('.spritesheet')[0],
      stack: document.querySelectorAll('.sprite-container')[0],

      sheetsX: Array.prototype.slice.call(document.querySelectorAll('.x-axis-animation')),
      sheetsY: Array.prototype.slice.call(document.querySelectorAll('.y-axis-animation'))
    };
    console.log(spAnimator.stack)
    spAnimator.stack.current = 0   

    spAnimator.stack.finish = function(e){
       //e.stopPropagation();
      if(e.animationName=='animation-x'){
          
          //triggerCopy(spAnimator.stack.current);          

          if(spAnimator.stack.current >= spAnimator.sheetsY.length-1) {
            console.log('finished');
          } else{
            spAnimator.stack.prev = (spAnimator.stack.current > 0) ? spAnimator.sheetsY[ spAnimator.stack.current-1 ] : spAnimator.sheetsY[ spAnimator.stack.current ];
            spAnimator.stack.current++;
            spAnimator.stack.cur = spAnimator.sheetsY[ spAnimator.stack.current ];
            if(spAnimator.stack.current > 1 ){ 
              bt.removeClass(spAnimator.stack.prev, 'current');
              }         
            bt.addClass(spAnimator.stack.cur, 'current');
          }        
      }
      if(e.animationName=='animation-y'){ 
          //console.log('stack finish'); 
      }
    }

    spAnimator.stack.start = function(e){
      if(e.animationName=='animation-x'){
        //console.log('sheet start');    
      }
      if(e.animationName=='animation-y'){
        //console.log('stack start');         
      }        
    } 

    spAnimator.stack.sheets = function(e){
      // itteration tick is for rows
      if(e.animationName=='animation-x'){
        //console.log('sheet itteration (end of row)');
      }
      // itteration tick is sheets
      if(e.animationName=='animation-y'){
          //console.log('stack itteration (end of sheet)');
      }
    }

    // this needs work
    spAnimator.stack.callback=function(callback, context){
      console.log(callback);
      spAnimator.stack._callback = callback;
      spAnimator.stack._context = context;
    } 

    function onEnd(){
      spAnimator.stack._callback.call(spAnimator.stack._context);
    }

    spAnimator.stack.addEventListener('animationstart', spAnimator.stack.start, true );
    spAnimator.stack.addEventListener('webkitAnimationStart', spAnimator.stack.start, true );        

    spAnimator.stack.addEventListener('animationend', spAnimator.stack.finish, true );
    spAnimator.stack.addEventListener('webkitAnimationEnd', spAnimator.stack.finish, true );

    spAnimator.stack.addEventListener('animationiteration', spAnimator.stack.sheets, true );
    spAnimator.stack.addEventListener('webkitAnimationIteration', spAnimator.stack.sheets, true );

    return spAnimator;
}     