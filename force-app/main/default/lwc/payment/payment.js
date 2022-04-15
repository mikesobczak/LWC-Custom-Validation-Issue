import { LightningElement, track } from 'lwc';

const ANOTHER_AMOUNT_OPTION = 'anotherAmount';
const AMOUNT_DUE_TODAY_OPTION = 'amountDueToday';

export default class Payment extends LightningElement {
    @track errorStr;
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

        this.isAnotherAmountRequired();
    }

    handleAnotherAmountChange(event) {
        const value = event.detail.value;
        this.anotherAmount = value;
        console.log(this.anotherAmount);
    }

    handleAnotherAmountFocus(event) {
        this.amountToPaySelection = ANOTHER_AMOUNT_OPTION;
        this.isAnotherAmountRequired();
    }

    isAnotherAmountRequired() {
        console.log('isAnotherAmountRequired()', this.amountToPaySelection);
        if(this.amountToPaySelection === ANOTHER_AMOUNT_OPTION || (this.amountToPaySelection !== ANOTHER_AMOUNT_OPTION && this.errorStr)) {
            console.log('isAnotherAmountRequired() = true');
            let oldErrorStr = this.errorStr;
            this.errorStr = (!this.anotherAmount) ? 'Complete this field.' : '';
            if (this.errorStr !== oldErrorStr){
                console.log('theresadiff');
                let anotherAmountCmp = this.template.querySelector(".anotherAmount");
                anotherAmountCmp.setCustomValidity(this.errorStr);
                anotherAmountCmp.reportValidity();
                anotherAmountCmp.checkValidity();
                console.log(anotherAmountCmp.checkValidity());
            }
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