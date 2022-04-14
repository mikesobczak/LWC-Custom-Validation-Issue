# LWC Custom Validation Issue

Issue is a result of using custom validation on an input that is tied to a selection in a radio button group.

## Issue at hand

<p>The initial state of the component:</p>

<img src="images/payment1.png">

<p>Place cursor into the another amount input field.</p>
<p>Custom validation is triggered and the field is displayed as required.</p>

<img src="images/payment2.png">

<p>Select a different radio button option that does not make the input field required.</p>
<p>Input field still shows the custom validation message.</p>

<img src="images/payment3.png">

<p>Select another radio button that does not make the input field required.</p>
<p>The custom validation message for the input finally disappears.</p>

<img src="images/payment4.png">
