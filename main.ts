controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(100, 100)
})
let mySprite: Sprite = null
mySprite = sprites.createProjectileFromSprite(assets.image`DVD`, mySprite, 50, 50)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
