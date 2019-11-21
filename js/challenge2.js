function setHomeAddress(){
	if ($("#useBilling").is(":checked")){
		$("#home").val($("#billing").val());
		$("#home").prop('disabled',true);
  }
	else {

		$("#home").val("");
		$("#home").prop('disabled',false);
  }

}
// <!-- Step 1: Adding a listener
// Add a listener that simply displays an alert, ie. window.alert("Yep, my function is being called");
//
// Step 2: Getting the Postal Address
// Before we can copy the address over, we need to know how to read it using JavaScript.  Use the .value property of the textarea. It contains the text typed into a form field. In your setHomeAddress() function, write a line of code to display the Postal Address textarea's value in an alert box. W3Schools Textarea value page has a useful example close to what you'll write.
//
// Step 3: Setting the value for the Home Address
// Now that we know how to find the value of any element in our document, the trick is to set our "homeaddress" element's value equal to the "postaladdress" element's value. To set the homeaddress we could do something like:
//  document.getElementById("homeaddress").value = "Hi there";
// Test and see if it works! You should find that when you click on your checkbox, the homeaddress is set to the text "Hi there".
// Now see if you can modify the above line so that instead of placing "Hi there" in the box, it puts the value of the postaladdress field.
//
// Step 4: Disabling the Home Address field
// Use the W3Schools page about the HTML DOM TextArea object and see if you can find a property that will allow us to disable our textarea.
// Try setting this property for your "homeaddress" element in your setHomeAddress() function. Make sure you test it out!
//
// Step 5: Toggling the Home Address
// Now when you test your form, you'll notice that when you un-check your checkbox, the home address field isn't enabled.
// Add an if-else statement to your setHomeAddress() function so that when the checkbox is un-checked the Home address field is reset to empty and enabled again.-->
