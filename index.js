function say(txt) {
  $("#container").html(txt);
}

function getRnd(min, max) {
  return (Math.random() * (max-min)) + min;
}

$(document).ready(function(){  
  $("#approve").submit(function(e){
    e.preventDefault();
  });
  $("#approve .submit").first().click(function(){
    var val=$("#approve .text").first().val();
    var num=Number(val);
    
    if (isNaN(num)) {
      say('Invalid number given');
      return;
    }
    
    if (num < 0 || num > 100) {
      say('Number must be within the range of 0 and 100');
      return;
    }
    
    var rnd=getRnd(0, 100);
    if (num > rnd) {
      say('bear approved.');
    }
    else {
      say('bear denied.');
    }
  });
});
