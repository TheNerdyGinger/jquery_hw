$("#ch3form").on("submit",function(){
  var fruit = $("input[name='fruit']")
  var c = false;
  fruit.each(function(){
    if($(this).is(":checked")){
      c = true;
      return false;
    }
  });
  if(c == false){
    alert("You must pick a fruit!")
    return false;
  }

  var stand = $("input[name='standing']")
  c = false;
  stand.each(function(){
    if($(this).is(":checked")){
      c = true;
      return false;
    }
  });
  if(c == false){
    alert("You must pick a standing!")
    return false;
  }

  return true;
})
