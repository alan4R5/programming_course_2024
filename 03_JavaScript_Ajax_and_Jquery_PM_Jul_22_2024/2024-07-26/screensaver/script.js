function getRandomImage() {
    var randomImage = new Array();

    randomImage[0] = "https://images.unsplash.com/photo-1487777571634-48eb9b252b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    randomImage[1] = "https://images.unsplash.com/photo-1471362229315-912f1caf95f7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    randomImage[2] = "https://images.unsplash.com/photo-1487113991643-86bfb4c9de2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    randomImage[3] = "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    randomImage[4] = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    randomImage[5] = "https://images.unsplash.com/photo-1496885950879-f0bb5768d2a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    var number = Math.floor(Math.random() * randomImage.length);

    return (document.getElementById("result").innerHTML = '<img src="' + randomImage[number] + '" alt=""></img>');
}