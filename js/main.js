document.getElementById("demo").innerHTML= Date();
function comment(){

	var item  = document.getElementById("name").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)

    var message= document.getElementById("message").value
    var word = document.createTextNode(message)
    var newMessage = document.createElement("li")
    newMessage.appendChild(word)

    document.getElementById("info").appendChild(newItem)

    document.getElementById("info").appendChild(newMessage)

    
}