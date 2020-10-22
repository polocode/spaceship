let mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 3 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 3 . . . . . . . 
    . . . . . . e e 1 e . . . . . . 
    . . . . . . e 3 1 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 3 3 3 1 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 3 3 3 3 1 3 e e . 
    c c c c c c e e 3 3 3 1 3 3 e e 
    c c c c c c e e 3 3 3 3 1 3 e e 
    `, SpriteKind.Player)
mySprite.setPosition(80, 97)
