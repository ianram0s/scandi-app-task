import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import Progressbar from 'Component/Progressbar';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import { SHIPPING_STEP, BILLING_STEP, DETAILS_STEP } from 'SourceRoute/Checkout/Checkout.config'

/** @namespace ScandiTest/Route/Checkout/Component */
class Checkout extends SourceCheckout {
    constructor(props) {
        super(props)
    }

    renderProgressbar() {
        const { checkoutStep } = this.props
        const availableSteps = [{   // Can easily add or remove steps. 
            id: SHIPPING_STEP,
            title: 'Shipping',
            step: 1,
        },
        {
            id: BILLING_STEP,
            title: 'Billing',
            step: 2,
        },
        {
            id: DETAILS_STEP,
            title: '',
            step: 3
        }]
        return(<Progressbar activeStep={checkoutStep} availableSteps={availableSteps}/>)
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgressbar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
