

class MenuItem {
    @observable open = false 
    icon = ""
    tooltip = ""
    name = ""
    static create (){
        return new MenuItem()
    }
    setName = name => this.name = name 
    setTooltip = tooltip => this.tooltip = tooltip 
    setIcon = icon => this.icon = icon 
}

MenuItem.create()
        .setName("editor")
        .setTooltip("Open editor")
        .setIcon("edit")
        .setScene("editor")