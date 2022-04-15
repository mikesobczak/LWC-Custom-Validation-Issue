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

    isAnotherAmountRequired = false;

    amountToPaySelection;
    anotherAmount;

    connectedCallback() {
        this.amountToPaySelection = AMOUNT_DUE_TODAY_OPTION
    }

    async handleAmountToPayChange(event) {
        this.amountToPaySelection = event.detail.value;
        const anotherAmountField = this.template.querySelector('.anotherAmount');
        if(this.amountToPaySelection !== ANOTHER_AMOUNT_OPTION) {
            this.anotherAmount = undefined;
            await Promise.resolve();
            anotherAmountField.reportValidity();
        } else {
        anotherAmountField.focus();
        anotherAmountField.reportValidity();
        }
        this.isAnotherAmountRequired = this.amountToPaySelection === ANOTHER_AMOUNT_OPTION;
    }

    handleAnotherAmountChange(event) {
        const value = event.detail.value;
        this.anotherAmount = value;
    }

    handleAnotherAmountFocus(event) {
        this.amountToPaySelection = ANOTHER_AMOUNT_OPTION;
        this.isAnotherAmountRequired = this.amountToPaySelection === ANOTHER_AMOUNT_OPTION;
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