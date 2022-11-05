class MenuItem {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    MakeItGreen() {
        this.color = "green";
    }
    Render() {
        const element = document.createElement('div');
        element.style.color = this.color;
        element.innerHTML = this.name;
        return element;
    }
}