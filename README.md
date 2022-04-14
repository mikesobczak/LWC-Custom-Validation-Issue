# LWC Custom Validation Issue

Issue is a result of using custom validation on an <b>lightning-input</b> that is tied to a selection in a <b>lightning-radio-group</b>.

## Issue at hand

<p>The initial state of the component:</p>

<img src="images/payment1.PNG">

<p>Place cursor into the another amount lightning-input.</p>
<p>Custom validation is triggered and the field is displayed as required.</p>

<img src="images/payment2.PNG">

<p>Select a different lightning-radio-group option that does not make the lightning-input field required.</p>
<p>Input field <i>still shows</i> the custom validation message.</p>

<img src="images/payment3.PNG">

<p>Select another lightning-radio-group option that does not make the lightning-input required.</p>
<p>The custom validation message for the input finally disappears.</p>

<img src="images/payment4.PNG">
