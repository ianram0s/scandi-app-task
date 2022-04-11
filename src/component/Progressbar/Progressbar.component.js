import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import './Progressbar.style';


export class Progressbar extends PureComponent {
    static propTypes = {
        activeStep: PropTypes.string.isRequired,
        availableSteps: PropTypes.array.isRequired
    };

    render() {  
        const { activeStep, availableSteps } = this.props
        const activeStepNumber = availableSteps.find((step) => step.id === activeStep).step
        return (
            <div block="Progressbar">
                {
                    availableSteps.map((stepItem) => {
                        if(stepItem.title) {
                            const mods = { isActive: (stepItem.step === activeStepNumber), isCompleted: (stepItem.step < activeStepNumber) }
                            return (
                                <div block='StepItem' mods={mods}>
                                    <div block='StepItem' elem='Count' mods={mods}>{stepItem.step < activeStepNumber ? '✓' : stepItem.step}</div>
                                    <div block='StepItem' elem='Title'>{stepItem.title}</div>
                                </div> 
                            )
                        }
                    })
                }
            </div>
        );
    }
}

export default Progressbar