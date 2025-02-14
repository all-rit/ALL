initClassesObjects = function()
  -- Using Lua tables as objects and classes  
  -- "Object" player
  player = {
    name = {"player","player_explosion"},
    x = 0,
    y = -70,
    width = 13,
    height = 8,
    condition = 1,
    alpha = 1,
    
    update = function(self)
      if self.condition == 1 then
        if keyboard.LEFT == 1 and self.x > -192 then self.x = self.x - 1.5 end
        if keyboard.RIGHT == 1 and self.x < 192 then self.x = self.x + 1.5 end
        if keyboard.press.SPACE == 1 then rocket.shot_time = 1 end
      end
    end,
    
    draw = function(self)
      screen:setAlpha(self.alpha)
      screen:drawSprite(self.name[self.condition], self.x, self.y, self.width, self.height)
      screen:setAlpha(1)
    end,
  }
  
  -- "Object" rocket
  rocket = {
    name = {"rocket",""},
    x = 0,
    y = -68,
    width = 1,
    height = 4,
    shot_timer = 1,
    shot_time = 0,
    condition = 1,
    
    update = function(self)
      if self.shot_time == 0 then self.x = player.x end
      if self.shot_timer <= 0 then
        self.shot_timer = 1
        self.shot_time = 0
        self.x = player.x
        self.y = -68
      end
      if self.shot_time == 1 then self.shot_timer = self.shot_timer - 1/60 end
      if self.shot_timer < 1 then self.y = self.y + 5 end
    end,
    
    draw = function(self)
      screen:drawSprite(self.name[self.condition], self.x, self.y, self.width, self.height)
    end,
  }
  
  -- "Class" Enemy
  Enemy = {}
  -- Class body
  function Enemy:new(name, x, y, width, height, speed)
    -- Properties
    local obj = {}
      obj.name = {name,"explosion"}
      obj.x = x
      obj.y = y
      obj.width = {width,8}
      obj.height = {height,8}
      obj.speed = speed
      obj.condition = 1
    
    -- Method
    function obj:update()
      if self.y < -100 then
        self.y = math.random(200,250)
        if self.name[self.condition] == "enemy1" or self.name[self.condition] == "enemy2" then
          self.x = math.random(-192,192)
        elseif self.name[self.condition] == "enemy3" then
          self.x = math.random(-100,100)
        end
      elseif self.condition == 1 then
        if self.name[self.condition] == "enemy1"then
          self.y = self.y - self.speed
        elseif self.name[self.condition] == "enemy2" and score > 15 then
          self.y = self.y - self.speed
        elseif self.name[self.condition] == "enemy3" and score > 30 then
          self.y = self.y - self.speed
          if flashingTimer > .5 then
            self.x = self.x - flashingTimer*4
          else
            self.x = self.x + (flashingTimer+.5)*4
          end
        end
      end
      
      destructionEnemy(self,rocket)
      damagePlayer(self, player)
      gameOver(self, player)
    end
    
    -- Method
    function obj:draw()
      screen:drawSprite(self.name[self.condition], self.x, self.y, self.width[self.condition],self.height[self.condition])
    end
    
    -- Setting the metatable for "obj"
    setmetatable(obj, self)
    self.__index = self; return obj
  end
end
