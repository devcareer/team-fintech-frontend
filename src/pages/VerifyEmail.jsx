import React from 'react';
import Button from '../components/General/Button/Button';
class Otpinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', otp1: '', otp2: '', otp3: '', otp4: '', otp5: '', disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    new FormData(event.target);
    console.log(this.state);
    event.preventDefault;
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <div className="flex items-center h-screen justify-center sm:w-screen">
        <main className="sm:max-w-xl sm:my-auto sm:rounded-md sm:h-fit sm:w-full sm:shadow-xl flex flex-col justify-between items-center h-screen mt-12 sm:mt-auto p-6">
          <section>
            <h1 className="text-center text-3xl font-custom font-medium mt-12">
              Verify your Identity
            </h1>
            <p className="text-text-2 my-4">
              Enter the verification code sent to your email jan****@g****.com
            </p>
            <form onSubmit={this.handleSubmit}>
              <div className="flex justify-between mx-auto my-4 max-w-sm space-x-2">
                <input
                  name="otp1"
                  type="text"
                  autoComplete="off"
                  className="border border-outline w-14 h-14 p-3 text-center"
                  value={this.state.otp1}
                  onKeyPress={this.keyPressed}
                  onChange={(e) => this.handleChange('otp1', e)}
                  tabIndex="1"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  name="otp2"
                  type="text"
                  autoComplete="off"
                  className="border border-outline w-14 h-14 p-3  text-lg text-center"
                  value={this.state.otp2}
                  onChange={(e) => this.handleChange('otp2', e)}
                  tabIndex="2"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  name="otp3"
                  type="text"
                  autoComplete="off"
                  className="border border-outline w-14 h-14 p-3  text-lg text-center"
                  value={this.state.otp3}
                  onChange={(e) => this.handleChange('otp3', e)}
                  tabIndex="3"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
                <input
                  name="otp4"
                  type="text"
                  autoComplete="off"
                  className="border border-outline w-14 h-14 p-3  text-lg text-center"
                  value={this.state.otp4}
                  onChange={(e) => this.handleChange('otp4', e)}
                  tabIndex="4"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />

                <input
                  name="otp5"
                  type="text"
                  autoComplete="off"
                  className="border border-outline w-14 h-14 p-3 text-lg text-center"
                  value={this.state.otp5}
                  onChange={(e) => this.handleChange('otp5', e)}
                  tabIndex="5"
                  maxLength="1"
                  onKeyUp={(e) => this.inputfocus(e)}
                />
              </div>
              <div className="flex justify-between my-4">
                <p>
                  Didn&apos;t recieve code? <span className="text-primary-300">Resend</span>
                </p>
                <span className="text-warningstate">30s</span>
              </div>
              <Button className="primary" type="submit">
                Sign In
              </Button>
            </form>
          </section>
          <section className="block text-primary-300 mb-24 sm:mb-auto sm:my-14">
            <p className="text-center">Use another method to recieve the code</p>
            <p className="text-center">Sign in to a different account</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Otpinput;
