spriteCollision = function(s1,s2)
  return math.max(0,math.min((s1.width[1]+s2.width)/2-math.abs(s1.x-s2.x),(s1.height[1]+s2.height)/2-math.abs(s1.y-s2.y)))
end

gameOver = function()
  if quantityLife < 0 then gameOverTime = 1 end
  if gameOverTime == 1 then gameOverTimer = gameOverTimer - 1/60 end
  if gameOverTimer < 0 then record = math.max(score,record) init() end
end

damagePlayer = function(obj1,obj2)
  if spriteCollision(obj1,obj2) > 0 and obj1.condition == 1 then
    if quantityLife > -1 and damageTime == 0 then
      audio:beep("square tempo 5 volume 30 span 50 duration 30 C to C1")
      audio:beep("saw tempo 5 volume 30 span 70 duration 19 C to C1")
      quantityLife = quantityLife - 1
      damageTime = 1
    end
  end
  
  if damageTime == 1 then
    damageTimer = damageTimer - 1/60
  end
  
  if damageTimer < 0 then
    damageTimer = 25
    damageTime = 0
  end
  
  if damageTimer > 20 and damageTime == 1 then
    player.condition = 2
    if rocket.shot_time == 0 then
      rocket.condition = 2
    end
  end
  
  if damageTimer <= 20 and gameOverTime == 0 then
    player.condition = 1
    player.alpha = flashingTimer
    rocket.condition = 1
  else
    player.alpha = 1
  end
end

destructionEnemy = function(obj1,obj2)
  if spriteCollision(obj1,obj2) > 0 and obj2.shot_time == 1
  and obj1.condition == 1 and obj1.y < 100 then
    audio:beep("square tempo 5 volume 30 span 60 duration 5 C to C2")
    -- Scoring points for a killed enemy
    if obj1.name[1] == "enemy1" then
      score = score + 1
    elseif obj1.name[1] == "enemy2" then
      score = score + 2
    elseif obj1.name[1] == "enemy3" then
      score = score + 3
    end
    obj2.y = 500
    obj1.condition = 2
  end
  
  if obj2.shot_timer <= 0 and obj1.condition == 2 then
    obj1.y = -105
    obj1.condition = 1
  end
end
