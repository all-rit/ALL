record = 0
init = function()
  game = 0
  score = 0
  
  -- Multiple assignment in Lua
  quantityLife, life = 3, {"life.0","life.1","life.2"}
  damageTime, damageTimer, gameOverTime, gameOverTimer, flashingTimer = 0, 25, 0, 25, 1
  
  initClassesObjects()
  
  -- Creating an instance of the "Enemy" class
  enemy1 = Enemy:new("enemy1",0,-110,12,8,.7)
  enemy2 = Enemy:new("enemy1",0,-110,12,8,.7)
  enemy3 = Enemy:new("enemy1",0,-110,12,8,.7)
  enemy4 = Enemy:new("enemy2",0,-110,8,8,1.2)
  enemy5 = Enemy:new("enemy2",0,-110,8,8,1.2)
  enemy6 = Enemy:new("enemy3",0,-110,14,8,1.1)
  enemy7 = Enemy:new("enemy3",0,-110,14,8,1.1)
  enemy8 = Enemy:new("enemy3",0,-110,14,8,1.1)
  
  objectList = {player,rocket,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,}
end


update = function()
  if keyboard.press.ENTER == 1 then if game == 0 then game = 1 end end
  if game == 1 then
    for i=1, #objectList do
      objectList[i]:update()
    end
  end
end


draw = function()
  screen:loadFont("Blocktopia")
  screen:loadFont("PixelOperator")
  screen:loadFont("Commodore64")
  screen:clear()
  screen:drawMap("map",0,0,400,200)
  
  if flashingTimer < 0 then flashingTimer = 1 else flashingTimer = flashingTimer - 1/60 end
  
  if game == 0 then
    if screen:isFontReady("Blocktopia") == 1 then
      screen:setFont("Blocktopia")
      screen:setLinearGradient(0, 60, 0, 10,"rgb(57,123,255)","rgb(0,0,255)")
      screen:drawText("GALAGA",0,35,55)
    end
    
    if screen:isFontReady("PixelOperator") == 1 then
      screen:setFont("PixelOperator")
      screen:setAlpha(flashingTimer > .5)
      screen:drawText("PRESS ENTER",0,-35,7,"rgb(255,255,0)")
      screen:setAlpha(1)
    end
  else
    for _, obj in ipairs(objectList) do
      obj:draw()
    end
    
    screen:setFont("Commodore64")
    screen:drawText("SCORE="..score,-120,80,5,"rgb(0,198,0)")
    
    if quantityLife <= 0 then
      screen:setAlpha(flashingTimer > .5)
      screen:drawText("LIFE=",120,80,5,"rgb(198,198,0)")
      screen:setAlpha(1)
    else
      screen:drawText("LIFE=",120,80,5,"rgb(198,198,0)")
    end
    
    screen:drawSprite(life[quantityLife], 147, 79)
    
    if gameOverTime == 1 then
      screen:drawText("GAME OVER",0,0,15,"rgb(227,0,0)")
    end
  end
  
  if screen:isFontReady("Commodore64") == 1 then
    screen:setFont("Commodore64")
    screen:drawText("RECORD="..record,0,80,5,"rgb(198,66,0)")
  end
end
