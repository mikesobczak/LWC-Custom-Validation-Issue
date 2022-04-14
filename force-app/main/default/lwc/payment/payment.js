import { LightningElement } from 'lwc';

const ANOTHER_AMOUNT_OPTION = 'anotherAmount';
const AMOUNT_DUE_TODAY_OPTION = 'amountDueToday';

export default class Payment extends LightningElement {

    labels = {
        toast: {
            processingErrorTitle: 'Processing Error'
            , validationErrorTitle: 'Input Validation Error'
            , validationErrorMessage: 'Please provide values for all required fields'
        },
        component: {
            paymentHeader: 'Payment'
            , amountToPay: 'Amount to Pay'
            , amountDueToday: 'Amount Due Today '
            , remainingBalance: 'Remaining Balance '
            , anotherAmount: 'Another Amount'
        }
    }

    amountToPaySelection;
    anotherAmount;

    connectedCallback() {
        this.amountToPaySelection = AMOUNT_DUE_TODAY_OPTION
    }

    handleAmountToPayChange(event) {

        console.log('payment', 'handleAmountToPayChange()', event.detail.value);

        this.amountToPaySelection = event.detail.value;

        if(this.amountToPaySelection !== ANOTHER_AMOUNT_OPTION) {
            this.anotherAmount = undefined;

            let anotherAmountCmp = this.template.querySelector(".anotherAmount");
            anotherAmountCmp.setCustomValidity("");
            anotherAmountCmp.reportValidity();
            anotherAmountCmp.checkValidity();
        }
    }

    handleAnotherAmountChange(event) {
        const value = event.detail.value;
        this.anotherAmount = value;
    }

    handleAnotherAmountFocus(event) {
        this.amountToPaySelection = ANOTHER_AMOUNT_OPTION;
    }

    get isAnotherAmountRequired() {
        console.log('isAnotherAmountRequired()', this.amountToPaySelection);
        if(this.amountToPaySelection === ANOTHER_AMOUNT_OPTION) {
            console.log('isAnotherAmountRequired() = true');
            return true;
        }
        console.log('isAnotherAmountRequired() = false');

        return false;
    }

    get amountToPayOptions() {
        const theOptions = [];
        theOptions.push({ label: this.labels.component.amountDueToday, value: AMOUNT_DUE_TODAY_OPTION});

        let balanceLabel = this.labels.component.remainingBalance;

        theOptions.push({ label: balanceLabel, value: 'remainingBalance'});
        
        theOptions.push({ label: this.labels.component.anotherAmount, value: ANOTHER_AMOUNT_OPTION });

        return theOptions;
    }

}