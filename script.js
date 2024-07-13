var animations = ['rejection'];
for (let i = 0; i < animations.length; i++) {
    var anim;
    var elem = document.getElementById(animations[i]);
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid meet'
        },
        path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/' + animations[i] + '.json'
    };
    anim = lottie.loadAnimation(animData);
    anim.setSubframe(false);
}
