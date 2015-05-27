    cEl = {
      animation: document.querySelectorAll('.animation')[0],
      
      stack: document.querySelectorAll('.sprite-container')[0],

      sheetsX: Array.prototype.slice.call(document.querySelectorAll('.x-axis-animation')),
      sheetsY: Array.prototype.slice.call(document.querySelectorAll('.y-axis-animation'))
      
    };

    cEl.stack.current = 0   

    cEl.stack.finish = function(e){
       //e.stopPropagation();
      if(e.animationName=='animation-x'){
          
          //triggerCopy(cEl.stack.current);          

          if(cEl.stack.current >= cEl.sheetsY.length-1) {
            TweenLite.delayedCall( 1 , creative.sequence );
          } else{
            cEl.stack.prev = (cEl.stack.current > 0) ? cEl.sheetsY[ cEl.stack.current-1 ] : cEl.sheetsY[ cEl.stack.current ];
            cEl.stack.current++;
            cEl.stack.cur = cEl.sheetsY[ cEl.stack.current ];
            if(cEl.stack.current > 1 ){ 
              bt.removeClass(cEl.stack.prev, 'current');
              }         
            bt.addClass(cEl.stack.cur, 'current');
          }        
      }
      if(e.animationName=='animation-y'){ 
          //console.log('stack finish'); 
      }
    }

    cEl.stack.start = function(e){
      if(e.animationName=='animation-x'){
        //console.log('sheet start');    
      }
      if(e.animationName=='animation-y'){
        //console.log('stack start');         
      }        
    } 

    cEl.stack.sheets = function(e){
      // itteration tick is for rows
      if(e.animationName=='animation-x'){
        //console.log('sheet itteration (end of row)');
      }
      // itteration tick is sheets
      if(e.animationName=='animation-y'){
          //console.log('stack itteration (end of sheet)');
      }
    }

    cEl.stack.addEventListener('animationstart', cEl.stack.start, true );
    cEl.stack.addEventListener('webkitAnimationStart', cEl.stack.start, true );        

    cEl.stack.addEventListener('animationend', cEl.stack.finish, true );
    cEl.stack.addEventListener('webkitAnimationEnd', cEl.stack.finish, true );

    cEl.stack.addEventListener('animationiteration', cEl.stack.sheets, true );
    cEl.stack.addEventListener('webkitAnimationIteration', cEl.stack.sheets, true ); 