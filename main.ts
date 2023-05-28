scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck2`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
animation.runImageAnimation(
truck,
assets.animation`truck1 animated`,
100,
true
)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041e0000000400012904000800012508000c0001240c0010000125100014000129`), music.PlaybackMode.LoopingInBackground)
