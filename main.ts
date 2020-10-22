let spaceship = sprites.create(img`
    . . . . . . . b 3 . . . . . . . 
    . . . . . . . b 3 . . . . . . . 
    . . . . . . . b 1 . . . . . . . 
    . . . . . . . b d . . . . . . . 
    . . . . . . . b d . . . . . . . 
    . . . . . . . b 3 . . . . . . . 
    . . . . . . . b d . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . . 3 3 1 3 . . . . . . 
    . . . . . b b b 1 1 3 . . . . . 
    . . . . 3 1 3 3 3 1 1 3 . . . . 
    . . d b b b d d 1 1 b b 3 3 . . 
    . d d d d 1 1 3 3 3 3 1 3 1 3 . 
    d d d d d d 1 1 3 3 3 1 3 3 1 3 
    d d d d d d 1 1 3 3 3 3 1 3 1 1 
    `, SpriteKind.Player)
spaceship.setPosition(80, 97)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdate(function () {
    spaceship.x += controller.dx()
})
